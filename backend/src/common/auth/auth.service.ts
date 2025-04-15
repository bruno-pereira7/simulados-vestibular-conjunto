import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { GetDto } from "../../modules/usuario/usuario.dto";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async create(usuario: GetDto): Promise<string> {
    return await this.jwtService.signAsync(usuario);
  }

  isValid(plainText: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainText, hash);
  }
}
