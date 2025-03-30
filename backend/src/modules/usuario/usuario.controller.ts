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
import { CreateDto, GetDto } from "./usuario.dto";
import { IUsuario } from "./usuario.interface";
import { UsuarioService } from "./usuario.service";

@Controller("usuarios")
export class UsuarioController implements ICrud<IUsuario, number> {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() data: CreateDto): Promise<number> {
    return this.usuarioService.create(data);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<number> {
    return this.usuarioService.delete(id);
  }

  @Get()
  findAll(): Promise<Array<GetDto>> {
    return this.usuarioService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<GetDto | null> {
    return this.usuarioService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() data: IUsuario): Promise<number> {
    return this.usuarioService.update(id, data);
  }
}
