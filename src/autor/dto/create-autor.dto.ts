import { CreateLibroDto } from "src/libro/dto/create-libro.dto";
import { ApiProperty } from '@nestjs/swagger';

export class CreateAutorDto {

    @ApiProperty()
    idAutor:   number;
    @ApiProperty()
    nombre:    string;
    @ApiProperty()
    categoria: string;
    @ApiProperty({ type: [CreateLibroDto] })
    libros:    CreateLibroDto[];


}






