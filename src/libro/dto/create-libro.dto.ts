import { ApiProperty } from '@nestjs/swagger';

export class CreateLibroDto {
    @ApiProperty({
        type: Number,
      }
      )
    id:          number;
    @ApiProperty()
    titulo:      string;
    @ApiProperty()
    lanzamiento: string;

}
