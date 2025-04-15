import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrudService } from "../../common/index.interface";
import { ISimuladoRedacao } from "./simulado-redacao.interface";

@Injectable()
export class SimuladoRedacaoService
  implements ICrudService<ISimuladoRedacao, number>
{
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: ISimuladoRedacao): Promise<boolean> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO simulados_redacoes (id_simulado, id_redacao, texto, nota, observacoes) VALUES (?, ?, ?, ?, ?);",
      args: [
        data.id_simulado,
        data.id_redacao,
        data.texto,
        data.nota,
        data.observacoes,
      ],
    });
  }

  delete(id: number): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM simulados_redacoes WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<ISimuladoRedacao>> {
    return this.databaseService.executeQuery<ISimuladoRedacao>(
      "SELECT id, id_simulado, id_redacao, texto, nota, observacoes FROM simulados_redacoes;",
    );
  }

  async findOne(id: number): Promise<ISimuladoRedacao | object> {
    const results = await this.databaseService.executeQuery<ISimuladoRedacao>({
      sql: "SELECT id, id_simulado, id_redacao, texto, nota, observacoes FROM simulados_redacoes WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return {};
    }
  }

  update(id: number, data: ISimuladoRedacao): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE simulados_redacoes SET id_simulado = ?, id_redacao = ?, texto = ?, nota = ?, observacoes = ? WHERE id = ?;",
      args: [
        data.id_simulado,
        data.id_redacao,
        data.texto,
        data.nota,
        data.observacoes,
        id,
      ],
    });
  }
}
