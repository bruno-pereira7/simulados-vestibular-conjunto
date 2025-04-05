import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoMateriaController } from "./questao-materia.controller";
import { QuestaoMateriaService } from "./questao-materia.service";

@Module({
  controllers: [QuestaoMateriaController],
  providers: [QuestaoMateriaService],
  imports: [DatabaseModule],
})
export class QuestaoMateriaModule {}
