import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class GetPermissionRequest {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;
}
