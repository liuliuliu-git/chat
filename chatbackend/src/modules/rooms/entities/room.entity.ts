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
import { RoomType } from '@/enums';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: RoomType,
    default: RoomType.GROUP,
  })
  type: RoomType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => Message, (message) => message.room)
  // messages: Message[];

  // @OneToMany(() => UserRoom, (userRoom) => userRoom.room)
  // userRooms: UserRoom[];
}
