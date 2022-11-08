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
    return await this.taskRepository.findAll({
      order: [['updatedAt', 'DESC']],
    });
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({ where: { id } });
  }

  async findCategory(category: string) {
    return await this.taskRepository.findAndCountAll({ where: { category } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id);
    return task ? await task.update({ ...updateTaskDto }) : null;
  }

  async remove(id: number) {
    const task = await this.findOne(id);
    return task ? await task.destroy() : null;
  }
}
