import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoRedacaoController } from "./simulado-redacao.controller";
import { SimuladoRedacaoService } from "./simulado-redacao.service";

@Module({
  controllers: [SimuladoRedacaoController],
  providers: [SimuladoRedacaoService],
  imports: [DatabaseModule],
})
export class SimuladoRedacaoModule {}
