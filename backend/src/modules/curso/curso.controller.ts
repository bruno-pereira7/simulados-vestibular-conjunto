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
import { ICurso } from "./curso.interface";
import { CursoService } from "./curso.service";

@Controller("cursos")
export class CursoController implements ICrud<ICurso, number> {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() data: ICurso): Promise<number> {
    return this.cursoService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.cursoService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<ICurso>> {
    return this.cursoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<ICurso | null> {
    return this.cursoService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() data: ICurso,
  ): Promise<number> {
    return this.cursoService.update(id, data);
  }
}
