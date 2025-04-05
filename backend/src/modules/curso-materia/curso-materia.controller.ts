import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ICrud } from "../../common/index.interface";
import { ICursoMateria } from "./curso-materia.interface";
import { CursoMateriaService } from "./curso-materia.service";

@Controller("cursos-materias")
export class CursoMateriaController implements ICrud<ICursoMateria, number> {
  constructor(private readonly cursoMateriaService: CursoMateriaService) {}

  @Post()
  create(@Body() data: ICursoMateria): Promise<number> {
    return this.cursoMateriaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.cursoMateriaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<ICursoMateria>> {
    return this.cursoMateriaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<ICursoMateria | null> {
    return this.cursoMateriaService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() data: ICursoMateria,
  ): Promise<number> {
    return this.cursoMateriaService.update(id, data);
  }
}
