import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { taskProvider } from './task.provider';

@Module({
  controllers: [TaskController],
  providers: [TaskService, ...taskProvider],
})
export class TaskModule {}
