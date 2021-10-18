import { ApiProperty } from '@nestjs/swagger';

export class CreatUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  age?: number;
}
