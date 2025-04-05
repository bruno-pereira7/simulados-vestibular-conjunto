import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { VestibularController } from "./vestibular.controller";
import { VestibularService } from "./vestibular.service";

@Module({
  controllers: [VestibularController],
  providers: [VestibularService],
  imports: [DatabaseModule],
})
export class VestibularModule {}
