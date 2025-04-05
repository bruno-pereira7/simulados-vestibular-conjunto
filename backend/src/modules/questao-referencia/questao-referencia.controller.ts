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
import { IQuestaoReferencia } from "./questao-referencia.interface";
import { QuestaoReferenciaService } from "./questao-referencia.service";

@Controller("questoes-referencias")
export class QuestaoReferenciaController
  implements ICrud<IQuestaoReferencia, number>
{
  constructor(
    private readonly questaoReferenciaService: QuestaoReferenciaService,
  ) {}

  @Post()
  create(@Body() data: IQuestaoReferencia): Promise<number> {
    return this.questaoReferenciaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.questaoReferenciaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IQuestaoReferencia>> {
    return this.questaoReferenciaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IQuestaoReferencia | null> {
    return this.questaoReferenciaService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() data: IQuestaoReferencia,
  ): Promise<number> {
    return this.questaoReferenciaService.update(id, data);
  }
}
