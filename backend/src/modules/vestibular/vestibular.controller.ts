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
import { IVestibular } from "./vestibular.interface";
import { VestibularService } from "./vestibular.service";

@Controller("vestibulares")
export class VestibularController implements ICrud<IVestibular, number> {
  constructor(private readonly vestibularService: VestibularService) {}

  @Post()
  create(@Body() data: IVestibular): Promise<number> {
    return this.vestibularService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.vestibularService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<IVestibular>> {
    return this.vestibularService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<IVestibular | null> {
    return this.vestibularService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IVestibular): Promise<number> {
    return this.vestibularService.update(id, data);
  }
}
