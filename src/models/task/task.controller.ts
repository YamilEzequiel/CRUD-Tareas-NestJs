import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tareas')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get('category/:category')
  async findCategory(@Param('category') category: string, @Res() res) {
    const tasks = await this.taskService.findCategory(category);
    if (tasks == null)
      throw new NotFoundException('No hay tareas con esa categoria');
    return res.status(HttpStatus.OK).json({
      message: 'Tareas encontrada',
      data: tasks,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const task = await this.taskService.findOne(+id);
    if (task == null) throw new NotFoundException('No se encontro la tarea');
    return res.status(HttpStatus.OK).json({
      message: 'Tarea encontrada',
      data: task,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Res() res,
  ) {
    const updateTask = await this.taskService.update(+id, updateTaskDto);
    if (updateTask == null) throw new NotFoundException('La tarea no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Tarea actualizada',
      data: updateTask,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    const removeTask = await this.taskService.remove(+id);
    if (removeTask == null) throw new NotFoundException('La tarea no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Tarea eliminada',
      data: removeTask,
    });
  }
}
