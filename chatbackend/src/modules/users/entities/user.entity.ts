import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
// import { Message } from '@/modules/messages';
// import { UserRoom } from '@/modules/user-rooms';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => Message, (message) => message.sender)
  // messages: Message[];

  // @OneToMany(() => UserRoom, (userRoom) => userRoom.user)
  // userRooms: UserRoom[];
}
