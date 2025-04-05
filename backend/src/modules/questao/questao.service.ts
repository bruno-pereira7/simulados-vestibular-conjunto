import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { IQuestao } from "./questao.interface";

@Injectable()
export class QuestaoService implements ICrud<IQuestao, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IQuestao): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO questoes (id_prova, texto) VALUES (?, ?);",
      args: [data.id_prova, data.texto],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM questoes WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IQuestao>> {
    return this.databaseService.executeQuery<IQuestao>(
      "SELECT id, id_prova, texto FROM questoes;",
    );
  }

  async findOne(id: number): Promise<IQuestao | null> {
    const results = await this.databaseService.executeQuery<IQuestao>({
      sql: "SELECT id, id_prova, texto FROM questoes WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: IQuestao): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE questoes SET id_prova = ?, texto = ? WHERE id = ?;",
      args: [data.id_prova, data.texto, id],
    });
  }
}
