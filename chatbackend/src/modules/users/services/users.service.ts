import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import {
  UsersRepository,
  CreateUserDto,
  UpdateUserDto,
  User,
} from '@/modules/users';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findByUsername(username);
  }

  async findByEmailWithPassword(email: string): Promise<User | null> {
    return this.usersRepository.findByEmailWithPassword(email);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.update(id, updateUserDto);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.usersRepository.remove(id);
  }

  async searchUsers(
    searchTerm: string,
    limit: number = 10,
    offset: number = 0,
  ): Promise<User[]> {
    if (!searchTerm || searchTerm.trim().length === 0) {
      throw new BadRequestException('Search term is required');
    }
    return this.usersRepository.searchUsers(searchTerm.trim(), limit, offset);
  }

  async getUsersWithPagination(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ users: User[]; total: number; page: number; limit: number }> {
    const offset = (page - 1) * limit;
    const users = await this.usersRepository.findAll();
    const total = users.length;
    const paginatedUsers = users.slice(offset, offset + limit);

    return {
      users: paginatedUsers,
      total,
      page,
      limit,
    };
  }
}
