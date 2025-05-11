import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { GetDto } from "../../modules/usuario/usuario.dto";
import { IConfiguration, IJwtPayload, IPerfil } from "../index.interface";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService<IConfiguration>,
  ) {}

  async create(usuario: GetDto): Promise<string> {
    return await this.jwtService.signAsync(usuario);
  }

  async verify(token: string): Promise<IJwtPayload | null> {
    try {
      return await this.jwtService.verifyAsync<IJwtPayload>(token, {
        secret: this.configService.get<string>("JWT_SECRET"),
      });
    } catch {
      throw new UnauthorizedException();
    }
  }

  matchRoles(roles: Array<string>, perfil: IPerfil): boolean {
    if (!roles || roles.length === 0) return true;

    if (!perfil) return false;

    if (perfil === "Administrador") return true;

    return roles.includes(perfil);
  }
}
