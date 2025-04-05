import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { MateriaController } from "./materia.controller";
import { MateriaService } from "./materia.service";

@Module({
  controllers: [MateriaController],
  providers: [MateriaService],
  imports: [DatabaseModule],
})
export class MateriaModule {}
