import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrudService } from "../../common/index.interface";
import { IRedacaoReferencia } from "./redacao-referencia.interface";

@Injectable()
export class RedacaoReferenciaService
  implements ICrudService<IRedacaoReferencia, number>
{
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IRedacaoReferencia): Promise<boolean> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO redacoes_referencias (id_redacao, id_referencia, ordem) VALUES (?, ?, ?);",
      args: [data.id_redacao, data.id_referencia, data.ordem],
    });
  }

  delete(id: number): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM redacoes_referencias WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IRedacaoReferencia>> {
    return this.databaseService.executeQuery<IRedacaoReferencia>(
      "SELECT id, id_redacao, id_referencia, ordem FROM redacoes_referencias;",
    );
  }

  async findOne(id: number): Promise<IRedacaoReferencia | object> {
    const results = await this.databaseService.executeQuery<IRedacaoReferencia>(
      {
        sql: "SELECT id, id_redacao, id_referencia, ordem FROM redacoes_referencias WHERE id = ?;",
        args: [id],
      },
    );

    if (results.length > 0) {
      return results[0];
    } else {
      return {};
    }
  }

  update(id: number, data: IRedacaoReferencia): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE redacoes_referencias SET id_redacao = ?, id_referencia = ?, ordem = ? WHERE id = ?;",
      args: [data.id_redacao, data.id_referencia, data.ordem, id],
    });
  }
}
