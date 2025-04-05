import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { ICursoMateria } from "./curso-materia.interface";

@Injectable()
export class CursoMateriaService implements ICrud<ICursoMateria, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: ICursoMateria): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO cursos_materias (id_curso, id_materia, peso) VALUES (?, ?, ?);",
      args: [data.id_curso, data.id_materia, data.peso],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM cursos_materias WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<ICursoMateria>> {
    return this.databaseService.executeQuery<ICursoMateria>(
      "SELECT id, id_curso, id_materia, peso FROM cursos_materias;",
    );
  }

  async findOne(id: number): Promise<ICursoMateria | null> {
    const results = await this.databaseService.executeQuery<ICursoMateria>({
      sql: "SELECT id, id_curso, id_materia, peso FROM cursos_materias WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: ICursoMateria): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE cursos_materias SET id_curso = ?, id_materia = ?, peso = ? WHERE id = ?;",
      args: [data.id_curso, data.id_materia, data.peso, id],
    });
  }
}
