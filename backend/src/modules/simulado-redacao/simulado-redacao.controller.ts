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
import { ISimuladoRedacao } from "./simulado-redacao.interface";
import { SimuladoRedacaoService } from "./simulado-redacao.service";

@Controller("simulados-redacoes")
export class SimuladoRedacaoController
  implements ICrud<ISimuladoRedacao, number>
{
  constructor(private readonly simuladoRedacaoService: SimuladoRedacaoService) {}

  @Post()
  create(@Body() data: ISimuladoRedacao): Promise<number> {
    return this.simuladoRedacaoService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.simuladoRedacaoService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<ISimuladoRedacao>> {
    return this.simuladoRedacaoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<ISimuladoRedacao | null> {
    return this.simuladoRedacaoService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() data: ISimuladoRedacao,
  ): Promise<number> {
    return this.simuladoRedacaoService.update(id, data);
  }
}
