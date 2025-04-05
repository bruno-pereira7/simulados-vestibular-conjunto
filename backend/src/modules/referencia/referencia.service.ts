import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { IReferencia } from "./referencia.interface";

@Injectable()
export class ReferenciaService implements ICrud<IReferencia, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IReferencia): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO referencias (titulo, texto, url_imagem, informacao_acesso, legenda) VALUES (?, ?, ?, ?, ?);",
      args: [
        data.titulo,
        data.texto,
        data.url_imagem,
        data.informacao_acesso,
        data.legenda,
      ],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM referencias WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IReferencia>> {
    return this.databaseService.executeQuery<IReferencia>(
      "SELECT id, titulo, texto, url_imagem, informacao_acesso, legenda FROM referencias;",
    );
  }

  async findOne(id: number): Promise<IReferencia | null> {
    const results = await this.databaseService.executeQuery<IReferencia>({
      sql: "SELECT id, titulo, texto, url_imagem, informacao_acesso, legenda FROM referencias WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: IReferencia): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE referencias SET titulo = ?, texto = ?, url_imagem = ?, informacao_acesso = ?, legenda = ? WHERE id = ?;",
      args: [
        data.titulo,
        data.texto,
        data.url_imagem,
        data.informacao_acesso,
        data.legenda,
        id,
      ],
    });
  }
}
