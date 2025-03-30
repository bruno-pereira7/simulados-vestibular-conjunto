import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [DatabaseModule],
})
export class UsuarioModule {}
