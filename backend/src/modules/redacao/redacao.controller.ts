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
import { IRedacao } from "./redacao.interface";
import { RedacaoService } from "./redacao.service";

@Controller("redacoes")
export class RedacaoController implements ICrud<IRedacao, number> {
  constructor(private readonly redacaoService: RedacaoService) {}

  @Post()
  create(@Body() data: IRedacao): Promise<number> {
    return this.redacaoService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.redacaoService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IRedacao>> {
    return this.redacaoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IRedacao | null> {
    return this.redacaoService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IRedacao): Promise<number> {
    return this.redacaoService.update(id, data);
  }
}
