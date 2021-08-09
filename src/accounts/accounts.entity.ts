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
export class Account extends Model {
  @Column({ primaryKey: true })
  id: string = uuid();

  @ForeignKey(() => User)
  @Column
  userId: string;

  @Column
  username: string;

  @Column
  password: string;

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
