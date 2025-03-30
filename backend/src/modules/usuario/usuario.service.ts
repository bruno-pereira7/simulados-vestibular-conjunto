import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrud } from "../../common/index.interface";
import { CreateDto, GetDto } from "./usuario.dto";
import { IUsuario } from "./usuario.interface";

@Injectable()
export class UsuarioService implements ICrud<IUsuario, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: CreateDto): Promise<number> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO usuarios (nome, email, senha, perfil) VALUES (?, ?, ?, ?);",
      args: [data.nome, data.email, data.senha, data.perfil],
    });
  }

  delete(id: number): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM usuarios WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<GetDto>> {
    return this.databaseService.executeQuery<GetDto>(
      "SELECT id, nome, email, perfil FROM usuarios;",
    );
  }

  async findOne(id: number): Promise<GetDto | null> {
    const results = await this.databaseService.executeQuery<IUsuario>({
      sql: "SELECT id, nome, email, perfil FROM usuarios WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

  update(id: number, data: IUsuario): Promise<number> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE usuarios SET nome = ?, email = ?, senha = ?, perfil = ? WHERE id = ?;",
      args: [data.nome, data.email, data.senha, data.perfil, id],
    });
  }
}
