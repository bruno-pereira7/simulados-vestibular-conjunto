import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { VestibularService } from "./vestibular.service";

describe("Vestibular Service", () => {
  let vestibularService: VestibularService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [VestibularService],
      imports: [DatabaseModule],
    }).compile();

    vestibularService = moduleRef.get<VestibularService>(VestibularService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
