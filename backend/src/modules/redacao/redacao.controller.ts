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
import { IRedacao } from "./redacao.interface";
import { RedacaoService } from "./redacao.service";
import { DeepseekService } from "../deepseek/deepseek.service";

@Controller("redacoes")
export class RedacaoController implements ICrudController<IRedacao, number> {
  constructor(
    private readonly redacaoService: RedacaoService,
    private readonly deepseekService: DeepseekService
  ) {}

  private readonly logger = new Logger(RedacaoController.name, {
    timestamp: true,
  });

  @Post()
  @Roles(["Administrador"])
  async create(@Body() data: IRedacao): Promise<IApiResponse<boolean>> {
    try {
      await this.redacaoService.create(data);

      return {
        ...API_RESPONSE_CONSTANTS.CREATE.SUCCESS,
        mensagem: "Redação cadastrada com sucesso!",
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
      await this.redacaoService.delete(id);

      return {
        ...API_RESPONSE_CONSTANTS.DELETE.SUCCESS,
        mensagem: "Redação excluída com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.DELETE.ERROR;
    }
  }

  @Get()
  async findAll(): Promise<IApiResponse<Array<IRedacao>>> {
    try {
      const data = await this.redacaoService.findAll();

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
  ): Promise<IApiResponse<IRedacao | object>> {
    try {
      const data = await this.redacaoService.findOne(id);

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
    @Body() data: IRedacao,
  ): Promise<IApiResponse<boolean>> {
    try {
      await this.redacaoService.update(id, data);

      return {
        ...API_RESPONSE_CONSTANTS.UPDATE.SUCCESS,
        mensagem: "Redação alterada com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.UPDATE.ERROR;
    }
  }

  @Get("provas/:id")
  async findOneByProvaId(
    @Param("id") id: number,
  ): Promise<IApiResponse<IRedacao | object>> {
    try {
      const data = await this.redacaoService.findOneByProvaId(id);

      return {
        ...API_RESPONSE_CONSTANTS.FIND_ONE.SUCCESS,
        dados: data,
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.FIND_ONE.ERROR;
    }
  }

  @Post("corrigir")
  async corrigir(@Body("texto") texto: string){
    try {
      const correcao = await this.deepseekService.corrigirRedacao(texto)

      return {
        sucesso: true,
        mensagem: "Redação corrigida com sucesso",
        dados: correcao,
      }
    }
    catch(erro){
      this.logger.error(erro)
      return {
        sucesso:false,
        mensagem: "Erro ao corrigir redação"
      }
    }
  }
}
