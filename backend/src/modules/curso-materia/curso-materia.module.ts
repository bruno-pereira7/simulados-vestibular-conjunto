import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { CursoMateriaController } from "./curso-materia.controller";
import { CursoMateriaService } from "./curso-materia.service";

@Module({
  controllers: [CursoMateriaController],
  providers: [CursoMateriaService],
  imports: [DatabaseModule],
})
export class CursoMateriaModule {}
