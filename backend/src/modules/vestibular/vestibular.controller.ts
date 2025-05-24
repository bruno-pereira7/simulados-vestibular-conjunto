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
import { IVestibular } from "./vestibular.interface";
import { VestibularService } from "./vestibular.service";

@Controller("vestibulares")
export class VestibularController
  implements ICrudController<IVestibular, number>
{
  constructor(private readonly vestibularService: VestibularService) {}

  private readonly logger = new Logger(VestibularController.name, {
    timestamp: true,
  });

  @Post()
  @Roles(["Administrador"])
  async create(@Body() data: IVestibular): Promise<IApiResponse<boolean>> {
    try {
      await this.vestibularService.create(data);

      return {
        ...API_RESPONSE_CONSTANTS.CREATE.SUCCESS,
        mensagem: "Vestibular cadastrado com sucesso!",
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
      await this.vestibularService.delete(id);

      return {
        ...API_RESPONSE_CONSTANTS.DELETE.SUCCESS,
        mensagem: "Vestibular excluído com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.DELETE.ERROR;
    }
  }

  @Get()
  async findAll(): Promise<IApiResponse<Array<IVestibular>>> {
    try {
      const data = await this.vestibularService.findAll();

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
  ): Promise<IApiResponse<IVestibular | object>> {
    try {
      const data = await this.vestibularService.findOne(id);

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
    @Body() data: IVestibular,
  ): Promise<IApiResponse<boolean>> {
    try {
      await this.vestibularService.update(id, data);

      return {
        ...API_RESPONSE_CONSTANTS.UPDATE.SUCCESS,
        mensagem: "Vestibular alterado com sucesso!",
      };
    } catch (error) {
      this.logger.error(error);
      return API_RESPONSE_CONSTANTS.UPDATE.ERROR;
    }
  }
}
