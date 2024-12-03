import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePermissionRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}
