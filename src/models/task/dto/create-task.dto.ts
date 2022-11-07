import { IsNotEmpty, IsString, IsNumber, Max, Min } from 'class-validator';
export class CreateTaskDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Min(5)
  @Max(20)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Min(5)
  @Max(300)
  description: string;

  state: string;

  category: string;
}
