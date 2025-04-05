import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { ISimuladoRedacao } from "./simulado-redacao.interface";

@Injectable()
export class SimuladoRedacaoService implements ICrud<ISimuladoRedacao, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: ISimuladoRedacao): Promise<number> {
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

  delete(id: number): Promise<number> {
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

  async findOne(id: number): Promise<ISimuladoRedacao | null> {
    const results = await this.databaseService.executeQuery<ISimuladoRedacao>({
      sql: "SELECT id, id_simulado, id_redacao, texto, nota, observacoes FROM simulados_redacoes WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: ISimuladoRedacao): Promise<number> {
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
