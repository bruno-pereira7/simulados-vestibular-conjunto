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
import { ISimuladoRedacao } from "./simulado-redacao.interface";
import { SimuladoRedacaoService } from "./simulado-redacao.service";

@Controller("simulados-redacoes")
export class SimuladoRedacaoController
  implements ICrudController<ISimuladoRedacao, number>
{
  constructor(
    private readonly simuladoRedacaoService: SimuladoRedacaoService,
  ) {}

  private readonly logger = new Logger(SimuladoRedacaoController.name, {
    timestamp: true,
  });

  @Post()
  async create(@Body() data: ISimuladoRedacao): Promise<IApiResponse<boolean>> {
    try {
      await this.simuladoRedacaoService.create(data);

      return {
        ...API_RESPONSE_CONSTANTS.CREATE.SUCCESS,
        mensagem: "Simulado redação cadastrado com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.CREATE.ERROR;
    }
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<IApiResponse<boolean>> {
    try {
      await this.simuladoRedacaoService.delete(id);

      return {
        ...API_RESPONSE_CONSTANTS.DELETE.SUCCESS,
        mensagem: "Simulado redação excluído com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.DELETE.ERROR;
    }
  }

  @Get()
  async findAll(): Promise<IApiResponse<Array<ISimuladoRedacao>>> {
    try {
      const data = await this.simuladoRedacaoService.findAll();

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
  ): Promise<IApiResponse<ISimuladoRedacao | object>> {
    try {
      const data = await this.simuladoRedacaoService.findOne(id);

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
    @Body() data: ISimuladoRedacao,
  ): Promise<IApiResponse<boolean>> {
    try {
      await this.simuladoRedacaoService.update(id, data);

      return {
        ...API_RESPONSE_CONSTANTS.UPDATE.SUCCESS,
        mensagem: "Simulado redação alterado com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.UPDATE.ERROR;
    }
  }
}
