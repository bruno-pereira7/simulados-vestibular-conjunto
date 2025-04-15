import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrudService } from "../../common/index.interface";
import { IQuestaoMateria } from "./questao-materia.interface";

@Injectable()
export class QuestaoMateriaService
  implements ICrudService<IQuestaoMateria, number>
{
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IQuestaoMateria): Promise<boolean> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO questoes_materias (id_questao, id_materia, prioridade) VALUES (?, ?, ?);",
      args: [data.id_questao, data.id_materia, data.prioridade],
    });
  }

  delete(id: number): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM questoes_materias WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IQuestaoMateria>> {
    return this.databaseService.executeQuery<IQuestaoMateria>(
      "SELECT id, id_questao, id_materia, prioridade FROM questoes_materias;",
    );
  }

  async findOne(id: number): Promise<IQuestaoMateria | object> {
    const results = await this.databaseService.executeQuery<IQuestaoMateria>({
      sql: "SELECT id, id_questao, id_materia, prioridade FROM questoes_materias WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return {};
    }
  }

  update(id: number, data: IQuestaoMateria): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE questoes_materias SET id_questao = ?, id_materia = ?, prioridade = ? WHERE id = ?;",
      args: [data.id_questao, data.id_materia, data.prioridade, id],
    });
  }
}
