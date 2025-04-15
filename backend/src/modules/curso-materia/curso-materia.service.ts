import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrudService } from "../../common/index.interface";
import { ICursoMateria } from "./curso-materia.interface";

@Injectable()
export class CursoMateriaService
  implements ICrudService<ICursoMateria, number>
{
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: ICursoMateria): Promise<boolean> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO cursos_materias (id_curso, id_materia, peso) VALUES (?, ?, ?);",
      args: [data.id_curso, data.id_materia, data.peso],
    });
  }

  delete(id: number): Promise<boolean> {
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

  async findOne(id: number): Promise<ICursoMateria | object> {
    const results = await this.databaseService.executeQuery<ICursoMateria>({
      sql: "SELECT id, id_curso, id_materia, peso FROM cursos_materias WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return {};
    }
  }

  update(id: number, data: ICursoMateria): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE cursos_materias SET id_curso = ?, id_materia = ?, peso = ? WHERE id = ?;",
      args: [data.id_curso, data.id_materia, data.peso, id],
    });
  }
}
