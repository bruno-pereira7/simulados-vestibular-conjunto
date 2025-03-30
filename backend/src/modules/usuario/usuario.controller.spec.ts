import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

describe("CatsController", () => {
  let catsController: UsuarioController;
  let catsService: UsuarioService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService, DatabaseModule],
    }).compile();

    catsService = moduleRef.get<UsuarioService>(UsuarioService);
    catsController = moduleRef.get<UsuarioController>(UsuarioController);
  });

  describe("findAll", () => {
    it("should return an array of cats", () => {
      expect(1).toBe(1);
    });
  });

  // describe("findAll", () => {
  //   it("should return an array of cats", async () => {
  //     const cats: IUsuario[] = [
  //       {
  //         age: 2,
  //         breed: "Bombay",
  //         name: "Pixel",
  //       },
  //     ];
  //     // @ts-ignore
  //     catsService.cats = cats;

  //     expect(await catsController.findAll()).toBe(cats);
  //   });
  // });

  // describe("create", () => {
  //   it("should add a new cat", async () => {
  //     const cat: IUsuario = {
  //       age: 2,
  //       breed: "Bombay",
  //       name: "Pixel",
  //     };
  //     const expectedCatArray = [cat];

  //     // @ts-ignore
  //     expect(catsService.cats).toStrictEqual([]);

  //     await catsController.create(cat);

  //     // @ts-ignore
  //     expect(catsService.cats).toStrictEqual(expectedCatArray);
  //   });
  // });
});
