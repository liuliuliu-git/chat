import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';
// import { User } from '@/modules/users';
// import { Room } from '@/modules/rooms';
import { UserRole } from '@/enums';

@Entity()
export class UserRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @ManyToOne(() => User, (user) => user.userRooms)
  // user: User;

  // @ManyToOne(() => Room, (room) => room.userRooms)
  // room: Room;

  @CreateDateColumn()
  joinedAt: Date;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.MEMBER,
  })
  role: UserRole;
}
