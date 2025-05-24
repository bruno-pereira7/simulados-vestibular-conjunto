import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { API_RESPONSE_CONSTANTS } from "../../common/constants/api-response.constant";
import { Roles } from "../../common/decorators/role.decorator";
import { IApiResponse, ICrudController } from "../../common/index.interface";
import { ICurso } from "./curso.interface";
import { CursoService } from "./curso.service";

@Controller("cursos")
export class CursoController implements ICrudController<ICurso, number> {
  constructor(private readonly cursoService: CursoService) {}

  private readonly logger = new Logger(CursoController.name, {
    timestamp: true,
  });

  @Post()
  @Roles(["Administrador"])
  async create(@Body() data: ICurso): Promise<IApiResponse<boolean>> {
    try {
      await this.cursoService.create(data);

      return {
        ...API_RESPONSE_CONSTANTS.CREATE.SUCCESS,
        mensagem: "Curso cadastrado com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.CREATE.ERROR;
    }
  }

  @Delete(":id")
  @Roles(["Administrador"])
  async delete(@Param("id") id: number): Promise<IApiResponse<boolean>> {
    try {
      await this.cursoService.delete(id);

      return {
        ...API_RESPONSE_CONSTANTS.DELETE.SUCCESS,
        mensagem: "Curso excluído com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.DELETE.ERROR;
    }
  }

  @Get()
  async findAll(): Promise<IApiResponse<Array<ICurso>>> {
    try {
      const data = await this.cursoService.findAll();

      return {
        ...API_RESPONSE_CONSTANTS.FIND_ALL.SUCCESS,
        dados: data,
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.FIND_ALL.ERROR;
    }
  }

  @Get(":id")
  async findOne(
    @Param("id") id: number,
  ): Promise<IApiResponse<ICurso | object>> {
    try {
      const data = await this.cursoService.findOne(id);

      return {
        ...API_RESPONSE_CONSTANTS.FIND_ONE.SUCCESS,
        dados: data,
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.FIND_ONE.ERROR;
    }
  }

  @Put(":id")
  @Roles(["Administrador"])
  async update(
    @Param("id") id: number,
    @Body() data: ICurso,
  ): Promise<IApiResponse<boolean>> {
    try {
      await this.cursoService.update(id, data);

      return {
        ...API_RESPONSE_CONSTANTS.UPDATE.SUCCESS,
        mensagem: "Curso alterado com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.UPDATE.ERROR;
    }
  }
}
