import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UpdateUserDto, CreateUserDto } from '@/modules/users';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: ['id', 'username', 'email', 'avatar', 'createdAt'],
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'avatar', 'createdAt'],
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { username },
    });
  }

  async findByIdWithPassword(id: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'password', 'avatar', 'createdAt'],
    });
  }

  async findByEmailWithPassword(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'password', 'avatar', 'createdAt'],
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.userRepository.update(id, updateUserDto);
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async searchUsers(
    searchTerm: string,
    limit: number = 10,
    offset: number = 0,
  ): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.username',
        'user.email',
        'user.avatar',
        'user.createdAt',
      ])
      .where(
        'user.username ILIKE :searchTerm OR user.email ILIKE :searchTerm',
        {
          searchTerm: `%${searchTerm}%`,
        },
      )
      .limit(limit)
      .offset(offset)
      .getMany();
  }
}
