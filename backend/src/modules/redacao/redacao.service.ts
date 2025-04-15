import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrudService } from "../../common/index.interface";
import { IRedacao } from "./redacao.interface";

@Injectable()
export class RedacaoService implements ICrudService<IRedacao, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IRedacao): Promise<boolean> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO redacoes (instrucoes, id_prova) VALUES (?, ?);",
      args: [data.instrucoes, data.id_prova],
    });
  }

  delete(id: number): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM redacoes WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IRedacao>> {
    return this.databaseService.executeQuery<IRedacao>(
      "SELECT id, instrucoes, id_prova FROM redacoes;",
    );
  }

  async findOne(id: number): Promise<IRedacao | object> {
    const results = await this.databaseService.executeQuery<IRedacao>({
      sql: "SELECT id, instrucoes, id_prova FROM redacoes WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return {};
    }
  }

  update(id: number, data: IRedacao): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE redacoes SET instrucoes = ?, id_prova = ? WHERE id = ?;",
      args: [data.instrucoes, data.id_prova, id],
    });
  }
}
