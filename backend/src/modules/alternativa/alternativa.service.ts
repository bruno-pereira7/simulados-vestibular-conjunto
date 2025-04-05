import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { IAlternativa } from "./alternativa.interface";

@Injectable()
export class AlternativaService implements ICrud<IAlternativa, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IAlternativa): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO alternativas (id_questao, nome, texto, correta) VALUES (?, ?, ?, ?);",
      args: [data.id_questao, data.nome, data.texto, data.correta],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM alternativas WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IAlternativa>> {
    return this.databaseService.executeQuery<IAlternativa>(
      "SELECT id, id_questao, nome, texto, correta FROM alternativas;",
    );
  }

  async findOne(id: number): Promise<IAlternativa | null> {
    const results = await this.databaseService.executeQuery<IAlternativa>({
      sql: "SELECT id, id_questao, nome, texto, correta FROM alternativas WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: IAlternativa): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE alternativas SET id_questao = ?, nome = ?, texto = ?, correta = ? WHERE id = ?;",
      args: [data.id_questao, data.nome, data.texto, data.correta, id],
    });
  }
}
