import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
// import { User } from '@/modules/users';
// import { Room } from './room.entity';
import { MessageType } from '@/enums';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  content: string;

  // @ManyToOne(() => User, (user) => user.messages)
  // sender: User;

  // @ManyToOne(() => Room, (room) => room.messages)
  // room: Room;

  @Column({
    type: 'enum',
    enum: MessageType,
    default: MessageType.TEXT,
  })
  messageType: MessageType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
