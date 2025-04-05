import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { ReferenciaController } from "./referencia.controller";
import { ReferenciaService } from "./referencia.service";

@Module({
  controllers: [ReferenciaController],
  providers: [ReferenciaService],
  imports: [DatabaseModule],
})
export class ReferenciaModule {}
