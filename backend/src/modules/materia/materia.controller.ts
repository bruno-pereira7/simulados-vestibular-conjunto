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
import { IMateria } from "./materia.interface";
import { MateriaService } from "./materia.service";

@Controller("materias")
export class MateriaController implements ICrud<IMateria, number> {
  constructor(private readonly materiaService: MateriaService) {}

  @Post()
  create(@Body() data: IMateria): Promise<number> {
    return this.materiaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.materiaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IMateria>> {
    return this.materiaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IMateria | null> {
    return this.materiaService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IMateria): Promise<number> {
    return this.materiaService.update(id, data);
  }
}
