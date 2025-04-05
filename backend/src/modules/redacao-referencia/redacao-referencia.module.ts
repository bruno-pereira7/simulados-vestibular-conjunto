import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { RedacaoReferenciaController } from "./redacao-referencia.controller";
import { RedacaoReferenciaService } from "./redacao-referencia.service";

@Module({
  controllers: [RedacaoReferenciaController],
  providers: [RedacaoReferenciaService],
  imports: [DatabaseModule],
})
export class RedacaoReferenciaModule {}
