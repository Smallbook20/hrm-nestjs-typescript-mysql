import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/users.entity';
import { v4 as uuid } from 'uuid';
import { Role } from '../roles/roles.entity';

@Table
export class Userrole extends Model {
  @Column({ primaryKey: true })
  id: string = uuid();

  @ForeignKey(() => User)
  @Column
  userId: string;

  @ForeignKey(() => Role)
  @Column
  roleId: string;

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

  @BelongsTo(() => Role)
  role: Role;
}
