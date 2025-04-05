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
import { IProva } from "./prova.interface";
import { ProvaService } from "./prova.service";

@Controller("provas")
export class ProvaController implements ICrud<IProva, number> {
  constructor(private readonly provaService: ProvaService) {}

  @Post()
  create(@Body() data: IProva): Promise<number> {
    return this.provaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.provaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IProva>> {
    return this.provaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IProva | null> {
    return this.provaService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IProva): Promise<number> {
    return this.provaService.update(id, data);
  }
}
