import { Table, Column, Model, HasOne } from 'sequelize-typescript';
import { Rolepermission } from '../rolepermissions/rolepermissions.entity';
import { v4 as uuid } from 'uuid';

@Table
export class Screen extends Model {
  @Column({ primaryKey: true })
  readonly id: string = uuid();

  @Column
  screenName: string;

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

  @HasOne(() => Rolepermission)
  rolepermission: Rolepermission;
}
