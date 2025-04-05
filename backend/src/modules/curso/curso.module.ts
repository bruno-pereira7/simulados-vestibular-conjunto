import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { CursoController } from "./curso.controller";
import { CursoService } from "./curso.service";

@Module({
  controllers: [CursoController],
  providers: [CursoService],
  imports: [DatabaseModule],
})
export class CursoModule {}
