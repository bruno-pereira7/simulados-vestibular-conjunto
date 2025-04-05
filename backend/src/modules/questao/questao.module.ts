import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoController } from "./questao.controller";
import { QuestaoService } from "./questao.service";

@Module({
  controllers: [QuestaoController],
  providers: [QuestaoService],
  imports: [DatabaseModule],
})
export class QuestaoModule {}
