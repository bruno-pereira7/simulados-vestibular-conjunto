import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../common/database/database.module";
import { HashModule } from "../../common/hash/hash.module";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { AuthModule } from "../../common/auth/auth.module";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [DatabaseModule, HashModule, AuthModule],
})
export class UsuarioModule {}
