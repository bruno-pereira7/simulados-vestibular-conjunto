import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./common/database/database.module";
import { UsuarioModule } from "./modules/usuario/usuario.module";

@Module({
  imports: [UsuarioModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
