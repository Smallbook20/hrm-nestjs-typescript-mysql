import { Table, Column, Model, HasOne } from 'sequelize-typescript';
import { Rolepermission } from '../rolepermissions/rolepermissions.entity';
import { Userrole } from '../userroles/userroles.entity';
import { v4 as uuid } from 'uuid';

@Table
export class Role extends Model {
  @Column({ primaryKey: true })
  id: string = uuid();

  @Column
  roleName: string;

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

  @HasOne(() => Userrole)
  userrole: Userrole;

  @HasOne(() => Rolepermission)
  rolepermission: Rolepermission;
}
