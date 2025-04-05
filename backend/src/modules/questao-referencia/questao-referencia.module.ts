import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoReferenciaController } from "./questao-referencia.controller";
import { QuestaoReferenciaService } from "./questao-referencia.service";

@Module({
  controllers: [QuestaoReferenciaController],
  providers: [QuestaoReferenciaService],
  imports: [DatabaseModule],
})
export class QuestaoReferenciaModule {}
