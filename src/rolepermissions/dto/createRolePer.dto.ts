export class CreateRolePerDto {
  roleId: string;
  moduleId: string;
  canRead: number;
  canWrite: number;
  canUpdate: number;
  canDelete: number;
  canApprove: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  isDelete: number;
  createBy: string;
  updateBy: string;
}
