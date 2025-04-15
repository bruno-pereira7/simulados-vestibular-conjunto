import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../common/database/database.service";
import { ICrudService } from "../../common/index.interface";
import { IVestibular } from "./vestibular.interface";

@Injectable()
export class VestibularService implements ICrudService<IVestibular, number> {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: IVestibular): Promise<boolean> {
    return this.databaseService.executeInsert({
      sql: "INSERT INTO vestibulares (ano, semestre) VALUES (?, ?);",
      args: [data.ano, data.semestre],
    });
  }

  delete(id: number): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "DELETE FROM vestibulares WHERE id = ?;",
      args: [id],
    });
  }

  findAll(): Promise<Array<IVestibular>> {
    return this.databaseService.executeQuery<IVestibular>(
      "SELECT id, ano, semestre FROM vestibulares;",
    );
  }

  async findOne(id: number): Promise<IVestibular | object> {
    const results = await this.databaseService.executeQuery<IVestibular>({
      sql: "SELECT id, ano, semestre FROM vestibulares WHERE id = ?;",
      args: [id],
    });

    if (results.length > 0) {
      return results[0];
    } else {
      return {};
    }
  }

  update(id: number, data: IVestibular): Promise<boolean> {
    return this.databaseService.executeUpdate({
      sql: "UPDATE vestibulares SET ano = ?, semestre = ? WHERE id = ?;",
      args: [data.ano, data.semestre, id],
    });
  }
}
