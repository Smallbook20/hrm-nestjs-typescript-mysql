export class UpdateUserDto {
  id: string;
  employeeId: string;
  managerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  department: string;
  identificationNumber: string;
  insuranceNumber: string;
  createdAt: Date;
  updatedAt: Date;
  createBy: string;
  updateBy: string;
}
