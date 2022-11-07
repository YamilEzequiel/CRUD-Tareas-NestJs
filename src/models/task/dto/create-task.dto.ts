import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: 'El titulo debe ser mayor a 5 caracteres' })
  @MaxLength(20)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(300)
  description: string;

  state: string;

  category: string;
}
