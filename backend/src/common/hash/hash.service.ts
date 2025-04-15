import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class HashService {
  async create(plainText: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(plainText, salt);

    return hash;
  }

  compare(plainText: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainText, hash);
  }
}
