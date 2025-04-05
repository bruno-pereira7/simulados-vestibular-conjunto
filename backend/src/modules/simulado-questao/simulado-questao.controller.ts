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
import { ISimuladoQuestao } from "./simulado-questao.interface";
import { SimuladoQuestaoService } from "./simulado-questao.service";

@Controller("simulados-questoes")
export class SimuladoQuestaoController
  implements ICrud<ISimuladoQuestao, number>
{
  constructor(private readonly simuladoQuestaoService: SimuladoQuestaoService) {}

  @Post()
  create(@Body() data: ISimuladoQuestao): Promise<number> {
    return this.simuladoQuestaoService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.simuladoQuestaoService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<ISimuladoQuestao>> {
    return this.simuladoQuestaoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<ISimuladoQuestao | null> {
    return this.simuladoQuestaoService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() data: ISimuladoQuestao,
  ): Promise<number> {
    return this.simuladoQuestaoService.update(id, data);
  }
}
