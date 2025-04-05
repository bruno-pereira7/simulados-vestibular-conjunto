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
import { ISimulado } from "./simulado.interface";
import { SimuladoService } from "./simulado.service";

@Controller("simulados")
export class SimuladoController implements ICrud<ISimulado, number> {
  constructor(private readonly simuladoService: SimuladoService) {}

  @Post()
  create(@Body() data: ISimulado): Promise<number> {
    return this.simuladoService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.simuladoService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<ISimulado>> {
    return this.simuladoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<ISimulado | null> {
    return this.simuladoService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: ISimulado): Promise<number> {
    return this.simuladoService.update(id, data);
  }
}
