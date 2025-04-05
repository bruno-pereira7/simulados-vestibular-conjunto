import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoQuestaoController } from "./simulado-questao.controller";
import { SimuladoQuestaoService } from "./simulado-questao.service";

@Module({
  controllers: [SimuladoQuestaoController],
  providers: [SimuladoQuestaoService],
  imports: [DatabaseModule],
})
export class SimuladoQuestaoModule {}
