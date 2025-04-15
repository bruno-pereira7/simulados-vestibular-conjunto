import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./common/auth/auth.module";
import { DatabaseModule } from "./common/database/database.module";
import { HashModule } from "./common/hash/hash.module";
import { PdfModule } from "./common/pdf/pdf.module";
import { AlternativaModule } from "./modules/alternativa/alternativa.module";
import { CursoMateriaModule } from "./modules/curso-materia/curso-materia.module";
import { CursoModule } from "./modules/curso/curso.module";
import { MateriaModule } from "./modules/materia/materia.module";
import { ProvaModule } from "./modules/prova/prova.module";
import { QuestaoMateriaModule } from "./modules/questao-materia/questao-materia.module";
import { QuestaoReferenciaModule } from "./modules/questao-referencia/questao-referencia.module";
import { QuestaoModule } from "./modules/questao/questao.module";
import { RedacaoReferenciaModule } from "./modules/redacao-referencia/redacao-referencia.module";
import { RedacaoModule } from "./modules/redacao/redacao.module";
import { ReferenciaModule } from "./modules/referencia/referencia.module";
import { SimuladoQuestaoModule } from "./modules/simulado-questao/simulado-questao.module";
import { SimuladoRedacaoModule } from "./modules/simulado-redacao/simulado-redacao.module";
import { SimuladoModule } from "./modules/simulado/simulado.module";
import { UsuarioModule } from "./modules/usuario/usuario.module";
import { VestibularModule } from "./modules/vestibular/vestibular.module";

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
    RedacaoModule,
    RedacaoReferenciaModule,
    ReferenciaModule,
    SimuladoModule,
    SimuladoQuestaoModule,
    SimuladoRedacaoModule,
    UsuarioModule,
    VestibularModule,
    HashModule,
    PdfModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
