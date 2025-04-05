import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { ProvaController } from "./prova.controller";
import { ProvaService } from "./prova.service";

@Module({
  controllers: [ProvaController],
  providers: [ProvaService],
  imports: [DatabaseModule],
})
export class ProvaModule {}
