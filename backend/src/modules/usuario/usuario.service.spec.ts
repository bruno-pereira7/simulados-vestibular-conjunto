import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { CreateDto } from "./usuario.dto";
import { UsuarioService } from "./usuario.service";

describe("UsuarioService", () => {
  let usuarioService: UsuarioService;
  let databaseService: DatabaseModule;

  beforeAll(() => {
    console.log("beforeAll");
  });

  afterAll(() => {
    console.log("afterAll");
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [UsuarioService],
      imports: [DatabaseModule],
    }).compile();

    usuarioService = moduleRef.get<UsuarioService>(UsuarioService);
  });

  // describe("findAll", () => {
  //   it("should return an array of cats", () => {
  //     expect(1).toBe(1);
  //   });
  // });

  // describe("findAll", () => {
  //   it("should return an array of cats", async () => {
  //     const result = [
  //       {
  //         name: "Frajola",
  //         age: 2,
  //         breed: "Stray",
  //       },
  //     ];
  //     //@ts-ignore
  //     usuarioService.cats = result;

  //     await expect(usuarioService.findAll()).resolves.toBe(result);
  //   });
  // });

  describe("create", () => {
    it("should add a new cat", async () => {
      const usuario: CreateDto = {
        email: "teste@gmail.com",
        nome: "Teste",
        perfil: "Administrador",
        senha: "123",
      };
      const id = await usuarioService.create(usuario);
      expect(id).toStrictEqual(1);
    });
  });
});
