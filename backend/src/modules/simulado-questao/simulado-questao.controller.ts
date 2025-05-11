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
import { ISimuladoQuestao } from "./simulado-questao.interface";
import { SimuladoQuestaoService } from "./simulado-questao.service";

@Controller("simulados-questoes")
export class SimuladoQuestaoController
  implements ICrudController<ISimuladoQuestao, number>
{
  constructor(
    private readonly simuladoQuestaoService: SimuladoQuestaoService,
  ) {}

  private readonly logger = new Logger(SimuladoQuestaoController.name, {
    timestamp: true,
  });

  @Post()
  @Roles(["Aluno"])
  async create(@Body() data: ISimuladoQuestao): Promise<IApiResponse<boolean>> {
    try {
      await this.simuladoQuestaoService.create(data);

      return {
        ...API_RESPONSE_CONSTANTS.CREATE.SUCCESS,
        mensagem: "Simulado questão cadastrado com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.CREATE.ERROR;
    }
  }

  @Delete(":id")
  @Roles(["Aluno"])
  async delete(@Param("id") id: number): Promise<IApiResponse<boolean>> {
    try {
      await this.simuladoQuestaoService.delete(id);

      return {
        ...API_RESPONSE_CONSTANTS.DELETE.SUCCESS,
        mensagem: "Simulado questão excluído com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.DELETE.ERROR;
    }
  }

  @Get()
  @Roles(["Aluno"])
  async findAll(): Promise<IApiResponse<Array<ISimuladoQuestao>>> {
    try {
      const data = await this.simuladoQuestaoService.findAll();

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
  @Roles(["Aluno"])
  async findOne(
    @Param("id") id: number,
  ): Promise<IApiResponse<ISimuladoQuestao | object>> {
    try {
      const data = await this.simuladoQuestaoService.findOne(id);

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
  @Roles(["Aluno"])
  async update(
    @Param("id") id: number,
    @Body() data: ISimuladoQuestao,
  ): Promise<IApiResponse<boolean>> {
    try {
      await this.simuladoQuestaoService.update(id, data);

      return {
        ...API_RESPONSE_CONSTANTS.UPDATE.SUCCESS,
        mensagem: "Simulado questão alterado com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.UPDATE.ERROR;
    }
  }
}
