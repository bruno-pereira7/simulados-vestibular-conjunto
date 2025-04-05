import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { AlternativaController } from "./alternativa.controller";
import { AlternativaService } from "./alternativa.service";

@Module({
  controllers: [AlternativaController],
  providers: [AlternativaService],
  imports: [DatabaseModule],
})
export class AlternativaModule {}
