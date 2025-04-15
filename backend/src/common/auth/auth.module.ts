import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";

@Module({
  exports: [AuthService],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.secret,
      signOptions: { expiresIn: "24h" },
    }),
  ],
})
export class AuthModule {}
