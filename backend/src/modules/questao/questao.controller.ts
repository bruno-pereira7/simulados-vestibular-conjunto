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
import { IQuestao } from "./questao.interface";
import { QuestaoService } from "./questao.service";

@Controller("questoes")
export class QuestaoController implements ICrud<IQuestao, number> {
  constructor(private readonly questaoService: QuestaoService) {}

  @Post()
  create(@Body() data: IQuestao): Promise<number> {
    return this.questaoService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.questaoService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IQuestao>> {
    return this.questaoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IQuestao | null> {
    return this.questaoService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IQuestao): Promise<number> {
    return this.questaoService.update(id, data);
  }
}
