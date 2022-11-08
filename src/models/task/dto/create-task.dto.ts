import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: 'El titulo debe ser mayor a 5 caracteres' })
  @MaxLength(20, { message: 'El titulo  debe ser menor a 30 caracteres' })
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: 'La descripcion debe ser mayor a 5 caracteres' })
  @MaxLength(300, { message: 'La descripcion  debe ser menor a 30 caracteres' })
  description: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  category: string;
}
