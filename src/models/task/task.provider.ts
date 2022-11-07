import { Task } from './entities/task.entity';

export const taskProvider = [
  {
    provide: 'TASK_REPOSITORY',
    useValue: Task,
  },
];
