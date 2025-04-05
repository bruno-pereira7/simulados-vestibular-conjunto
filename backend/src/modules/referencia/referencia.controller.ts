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
import { IReferencia } from "./referencia.interface";
import { ReferenciaService } from "./referencia.service";

@Controller("referencias")
export class ReferenciaController implements ICrud<IReferencia, number> {
  constructor(private readonly referenciaService: ReferenciaService) {}

  @Post()
  create(@Body() data: IReferencia): Promise<number> {
    return this.referenciaService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.referenciaService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IReferencia>> {
    return this.referenciaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IReferencia | null> {
    return this.referenciaService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IReferencia): Promise<number> {
    return this.referenciaService.update(id, data);
  }
}
