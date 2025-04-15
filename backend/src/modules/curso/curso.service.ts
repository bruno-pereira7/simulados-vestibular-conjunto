import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrudService } from "../../common/index.interface";
import { ICurso } from "./curso.interface";

@Injectable()
export class CursoService implements ICrudService<ICurso, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: ICurso): Promise<boolean> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO cursos (nome) VALUES (?);",
      args: [data.nome],
    });
  }

  delete(id: number): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM cursos WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<ICurso>> {
    return this.databaseService.executeQuery<ICurso>(
      "SELECT id, nome FROM cursos;",
    );
  }

  async findOne(id: number): Promise<ICurso | object> {
    const results = await this.databaseService.executeQuery<ICurso>({
      sql: "SELECT id, nome FROM cursos WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return {};
    }
  }

  update(id: number, data: ICurso): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE cursos SET nome = ? WHERE id = ?;",
      args: [data.nome, id],
    });
  }
}
