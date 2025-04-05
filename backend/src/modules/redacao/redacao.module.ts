import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { RedacaoController } from "./redacao.controller";
import { RedacaoService } from "./redacao.service";

@Module({
  controllers: [RedacaoController],
  providers: [RedacaoService],
  imports: [DatabaseModule],
})
export class RedacaoModule {}
