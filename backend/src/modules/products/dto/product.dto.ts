import { ApiProperty } from "@nestjs/swagger";
import { ResponseWrapperDto } from "../../../common/index.js";
import { IsInt, Min, IsString, IsNotEmpty, IsNumber, IsUrl } from "class-validator";

export class ProductDto {
  @ApiProperty({ example: 1, description: 'ID único del documento' })
  @IsInt()
  @Min(0)
  id!: number;

  @ApiProperty({ example: 'Manual de mantenimiento', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 49.99, description: 'Precio del documento o elemento' })
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiProperty({ example: 'Descripción detallada del contenido del documento' })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({ example: 'Manuales', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  category!: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'URL de la imagen asociada' })
  @IsString()
  @IsUrl()
  image!: string;
}

export class ProductsResponseDto extends ResponseWrapperDto<
  ProductDto[]
> {
  @ApiProperty({ type: ProductDto, isArray: true })
  declare data: ProductDto[];
}
