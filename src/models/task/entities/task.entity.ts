import { Table, Column, Model, Default } from 'sequelize-typescript';

@Table
export class Task extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Default('Active')
  @Column
  state: string;

  @Default('All')
  @Column
  category: string;
}
