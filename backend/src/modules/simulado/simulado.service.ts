import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { ISimulado } from "./simulado.interface";

@Injectable()
export class SimuladoService implements ICrud<ISimulado, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: ISimulado): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO simulados (id_usuario, nome, data, id_curso, nota) VALUES (?, ?, ?, ?, ?);",
      args: [data.id_usuario, data.nome, data.data, data.id_curso, data.nota],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM simulados WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<ISimulado>> {
    return this.databaseService.executeQuery<ISimulado>(
      "SELECT id, id_usuario, nome, data, id_curso, nota FROM simulados;",
    );
  }

  async findOne(id: number): Promise<ISimulado | null> {
    const results = await this.databaseService.executeQuery<ISimulado>({
      sql: "SELECT id, id_usuario, nome, data, id_curso, nota FROM simulados WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: ISimulado): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE simulados SET id_usuario = ?, nome = ?, data = ?, id_curso = ?, nota = ? WHERE id = ?;",
      args: [
        data.id_usuario,
        data.nome,
        data.data,
        data.id_curso,
        data.nota,
        id,
      ],
    });
  }
}
