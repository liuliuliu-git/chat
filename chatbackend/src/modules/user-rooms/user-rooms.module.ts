import { Module } from '@nestjs/common';
import { UserRoomsService } from './services/user-rooms.service';
import { UserRoomsController } from './controllers/user-rooms.controller';

@Module({
  controllers: [UserRoomsController],
  providers: [UserRoomsService],
})
export class UserRoomsModule {}
