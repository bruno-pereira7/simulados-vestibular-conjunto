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
import { IRedacaoReferencia } from "./redacao-referencia.interface";
import { RedacaoReferenciaService } from "./redacao-referencia.service";

@Controller("redacoes-referencias")
export class RedacaoReferenciaController
  implements ICrud<IRedacaoReferencia, number>
{
  constructor(
    private readonly redacaoReferenciaService: RedacaoReferenciaService,
  ) {}

  @Post()
  create(@Body() data: IRedacaoReferencia): Promise<number> {
    return this.redacaoReferenciaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.redacaoReferenciaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IRedacaoReferencia>> {
    return this.redacaoReferenciaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IRedacaoReferencia | null> {
    return this.redacaoReferenciaService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() data: IRedacaoReferencia,
  ): Promise<number> {
    return this.redacaoReferenciaService.update(id, data);
  }
}
