import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { IProva } from "./prova.interface";

@Injectable()
export class ProvaService implements ICrud<IProva, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IProva): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO provas (url_arquivo, nome, id_vestibular, instrucoes) VALUES (?, ?, ?, ?);",
      args: [data.url_arquivo, data.nome, data.id_vestibular, data.instrucoes],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM provas WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IProva>> {
    return this.databaseService.executeQuery<IProva>(
      "SELECT id, url_arquivo, nome, id_vestibular, instrucoes FROM provas;",
    );
  }

  async findOne(id: number): Promise<IProva | null> {
    const results = await this.databaseService.executeQuery<IProva>({
      sql: "SELECT id, url_arquivo, nome, id_vestibular, instrucoes FROM provas WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: IProva): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE provas SET url_arquivo = ?, nome = ?, id_vestibular = ?, instrucoes = ? WHERE id = ?;",
      args: [
        data.url_arquivo,
        data.nome,
        data.id_vestibular,
        data.instrucoes,
        id,
      ],
    });
  }
}
