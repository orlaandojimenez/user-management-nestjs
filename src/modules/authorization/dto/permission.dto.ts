export class PermissionDto {
  id: number;
  name: string;
}

export class GetPermissionsDto {
  id?: number;
  name?: string;
  roleId?: number;
}
