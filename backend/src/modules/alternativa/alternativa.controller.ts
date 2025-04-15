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
import { IApiResponse, ICrudController } from "../../common/index.interface";
import { IAlternativa } from "./alternativa.interface";
import { AlternativaService } from "./alternativa.service";

@Controller("alternativas")
export class AlternativaController
  implements ICrudController<IAlternativa, number>
{
  constructor(private readonly alternativaService: AlternativaService) {}

  private readonly logger = new Logger(AlternativaController.name, {
    timestamp: true,
  });

  @Post()
  async create(@Body() data: IAlternativa): Promise<IApiResponse<boolean>> {
    try {
      await this.alternativaService.create(data);

      return {
        ...API_RESPONSE_CONSTANTS.CREATE.SUCCESS,
        mensagem: "Alternativa cadastrada com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.CREATE.ERROR;
    }
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<IApiResponse<boolean>> {
    try {
      await this.alternativaService.delete(id);

      return {
        ...API_RESPONSE_CONSTANTS.DELETE.SUCCESS,
        mensagem: "Alternativa excluída com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.DELETE.ERROR;
    }
  }

  @Get()
  async findAll(): Promise<IApiResponse<Array<IAlternativa>>> {
    try {
      const data = await this.alternativaService.findAll();

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
  ): Promise<IApiResponse<IAlternativa | object>> {
    try {
      const data = await this.alternativaService.findOne(id);

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
  async update(
    @Param("id") id: number,
    @Body() data: IAlternativa,
  ): Promise<IApiResponse<boolean>> {
    try {
      await this.alternativaService.update(id, data);

      return {
        ...API_RESPONSE_CONSTANTS.UPDATE.SUCCESS,
        mensagem: "Alternativa alterada com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.UPDATE.ERROR;
    }
  }
}
