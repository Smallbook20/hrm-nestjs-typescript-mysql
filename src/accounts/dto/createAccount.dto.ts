export class CreateAccountDto {
  userId: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isDelete: number;
  createBy: string;
  updateBy: string;
}
