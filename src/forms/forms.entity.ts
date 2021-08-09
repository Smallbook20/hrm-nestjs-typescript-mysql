import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/users.entity';
import { v4 as uuid } from 'uuid';

@Table
export class Form extends Model {
  @Column({ primaryKey: true })
  id: string = uuid();

  @ForeignKey(() => User)
  @Column
  userId: string;

  @Column
  typeOf: string;

  @Column
  managerId: string;

  @Column
  note: string;

  @Column
  task: string;

  @Column
  achievement: string;

  @Column
  managerComment: string;

  @Column
  status: string;

  @Column('datetime')
  createdAt: Date;

  @Column('datetime')
  updatedAt: Date;

  @Column
  isDelete: number;

  @Column
  createBy: string;

  @Column
  updateBy: string;

  @BelongsTo(() => User)
  user: User;
}
