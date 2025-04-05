import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { ISimuladoQuestao } from "./simulado-questao.interface";

@Injectable()
export class SimuladoQuestaoService implements ICrud<ISimuladoQuestao, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: ISimuladoQuestao): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO simulados_questoes (id_simulado, id_questao, id_alternativa) VALUES (?, ?, ?);",
      args: [data.id_simulado, data.id_questao, data.id_alternativa],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM simulados_questoes WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<ISimuladoQuestao>> {
    return this.databaseService.executeQuery<ISimuladoQuestao>(
      "SELECT id, id_simulado, id_questao, id_alternativa FROM simulados_questoes;",
    );
  }

  async findOne(id: number): Promise<ISimuladoQuestao | null> {
    const results = await this.databaseService.executeQuery<ISimuladoQuestao>({
      sql: "SELECT id, id_simulado, id_questao, id_alternativa FROM simulados_questoes WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: ISimuladoQuestao): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE simulados_questoes SET id_simulado = ?, id_questao = ?, id_alternativa = ? WHERE id = ?;",
      args: [data.id_simulado, data.id_questao, data.id_alternativa, id],
    });
  }
}
