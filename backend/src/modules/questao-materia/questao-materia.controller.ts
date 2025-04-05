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
import { IQuestaoMateria } from "./questao-materia.interface";
import { QuestaoMateriaService } from "./questao-materia.service";

@Controller("questoes-materias")
export class QuestaoMateriaController implements ICrud<IQuestaoMateria, number> {
  constructor(private readonly QuestaoMateriaService: QuestaoMateriaService) {}

  @Post()
  create(@Body() data: IQuestaoMateria): Promise<number> {
    return this.QuestaoMateriaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.QuestaoMateriaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IQuestaoMateria>> {
    return this.QuestaoMateriaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IQuestaoMateria | null> {
    return this.QuestaoMateriaService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IQuestaoMateria): Promise<number> {
    return this.QuestaoMateriaService.update(id, data);
  }
}
