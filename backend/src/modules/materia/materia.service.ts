import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { IMateria } from "./materia.interface";

@Injectable()
export class MateriaService implements ICrud<IMateria, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IMateria): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO materias (id_questao, nome, texto, correta) VALUES (?);",
      args: [data.nome],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM materias WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IMateria>> {
    return this.databaseService.executeQuery<IMateria>(
      "SELECT id, nome FROM materias;",
    );
  }

  async findOne(id: number): Promise<IMateria | null> {
    const results = await this.databaseService.executeQuery<IMateria>({
      sql: "SELECT id, nome FROM materias WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: IMateria): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE materias SET nome = ? WHERE id = ?;",
      args: [data.nome, id],
    });
  }
}
