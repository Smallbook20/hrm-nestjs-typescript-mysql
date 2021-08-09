import { Table, Column, Model, HasMany, HasOne } from 'sequelize-typescript';
import { Userrole } from '../userroles/userroles.entity';
import { v4 as uuid } from 'uuid';
import { Form } from '../forms/forms.entity';
import { Account } from '../accounts/accounts.entity';

@Table
export class User extends Model {
  @Column({ primaryKey: true })
  id: string = uuid();

  @Column
  employeeId: string;

  @Column
  managerId: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  address: string;

  @Column
  avatar: string;

  @Column
  department: string;

  @Column
  identificationNumber: string;

  @Column
  insuranceNumber: string;

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

  @HasMany(() => Userrole)
  userroles: Userrole[];

  @HasMany(() => Form)
  forms: Form[];

  @HasOne(() => Account)
  account: Account;
}
