import { Injectable, Inject } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: typeof Task,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.create({ ...createTaskDto });
  }

  async findAll() {
    return await this.findAll();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return 'null';
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
