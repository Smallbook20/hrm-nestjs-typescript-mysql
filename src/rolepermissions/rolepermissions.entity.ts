import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Role } from '../roles/roles.entity';
import { v4 as uuid } from 'uuid';
import { Screen } from '../screens/screens.entity';

@Table
export class Rolepermission extends Model {
  @Column({ primaryKey: true })
  id: string = uuid();

  @ForeignKey(() => Role)
  @Column
  roleId: string;

  @ForeignKey(() => Screen)
  @Column
  screenId: string;

  @Column
  canRead: number;

  @Column
  canWrite: number;

  @Column
  canUpdate: number;

  @Column
  canDelete: number;

  @Column
  canApprove: number;

  @Column('datetime')
  createdAt: Date;

  @Column('datetime')
  updatedAt: Date;

  @Column
  url: string;

  @Column
  isDelete: number;

  @Column
  createBy: string;

  @Column
  updateBy: string;

  @BelongsTo(() => Role)
  role: Role;

  @BelongsTo(() => Screen)
  screen: Screen;
}
