export class UpdateRolePerDto {
  id: string;
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
  createBy: string;
  updateBy: string;
}
