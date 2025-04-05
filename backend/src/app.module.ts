import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./common/database/database.module";
import { UsuarioModule } from "./modules/usuario/usuario.module";
import { AlternativaModule } from "./modules/alternativa/alternativa.module";
import { CursoModule } from "./modules/curso/curso.module";
import { CursoMateriaModule } from "./modules/curso-materia/curso-materia.module";
import { MateriaModule } from "./modules/materia/materia.module";
import { ProvaModule } from "./modules/prova/prova.module";
import { QuestaoModule } from "./modules/questao/questao.module";
import { QuestaoMateriaModule } from "./modules/questao-materia/questao-materia.module";
import { QuestaoReferenciaModule } from "./modules/questao-referencia/questao-referencia.module";

@Module({
  imports: [
    AlternativaModule,
    CursoMateriaModule,
    CursoModule,
    DatabaseModule,
    MateriaModule,
    ProvaModule,
    QuestaoMateriaModule,
    QuestaoModule,
    QuestaoReferenciaModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
