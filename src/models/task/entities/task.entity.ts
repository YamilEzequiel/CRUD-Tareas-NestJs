import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Task extends Model {
  @Column
  title: string;

  @Column
  description: number;

  @Column
  state: string;

  @Column
  category: number;
}
