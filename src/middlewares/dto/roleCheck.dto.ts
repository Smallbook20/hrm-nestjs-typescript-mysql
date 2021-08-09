export class RoleCheckDto {
  id: string;
  userId: string;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
  isDelete: number;
  createBy: string;
  updateBy: string;
  role: {
    id: string;
    roleName: string;
    createdAt: Date;
    updatedAt: Date;
    isDelete: number;
    createBy: string;
    updateBy: string;
    rolepermission: {
      id: string;
      roleId: string;
      screenId: string;
      canRead: number;
      canWrite: number;
      canUpdate: number;
      canDelete: number;
      canApprove: number;
      createdAt: Date;
      updatedAt: Date;
      url: string;
      isDelete: number;
      createBy: string;
      updateBy: string;
    };
  };
}
