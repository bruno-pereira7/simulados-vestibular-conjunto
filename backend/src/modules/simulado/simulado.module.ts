import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoController } from "./simulado.controller";
import { SimuladoService } from "./simulado.service";

@Module({
  controllers: [SimuladoController],
  providers: [SimuladoService],
  imports: [DatabaseModule],
})
export class SimuladoModule {}
