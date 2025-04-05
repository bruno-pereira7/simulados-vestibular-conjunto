import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { IQuestaoReferencia } from "./questao-referencia.interface";

@Injectable()
export class QuestaoReferenciaService
  implements ICrud<IQuestaoReferencia, number>
{
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IQuestaoReferencia): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO questoes_referencias (id_questao, id_referencia, ordem) VALUES (?, ?, ?);",
      args: [data.id_questao, data.id_referencia, data.ordem],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM questoes_referencias WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IQuestaoReferencia>> {
    return this.databaseService.executeQuery<IQuestaoReferencia>(
      "SELECT id, id_questao, id_referencia, ordem FROM questoes_referencias;",
    );
  }

  async findOne(id: number): Promise<IQuestaoReferencia | null> {
    const results = await this.databaseService.executeQuery<IQuestaoReferencia>(
      {
        sql: "SELECT id, id_questao, id_referencia, ordem FROM questoes_referencias WHERE id = ?;",
        args: [id],
      },
    );

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: IQuestaoReferencia): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE questoes_referencias SET id_questao = ?, id_referencia = ?, ordem = ? WHERE id = ?;",
      args: [data.id_questao, data.id_referencia, data.ordem, id],
    });
  }
}
