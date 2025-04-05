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
import { IAlternativa } from "./alternativa.interface";
import { AlternativaService } from "./alternativa.service";

@Controller("alternativas")
export class AlternativaController implements ICrud<IAlternativa, number> {
  constructor(private readonly alternativaService: AlternativaService) {}

  @Post()
  create(@Body() data: IAlternativa): Promise<number> {
    return this.alternativaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.alternativaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IAlternativa>> {
    return this.alternativaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IAlternativa | null> {
    return this.alternativaService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IAlternativa): Promise<number> {
    return this.alternativaService.update(id, data);
  }
}
