import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { DatabaseModule } from "../../common/database/database.module";
import { PdfModule } from "../../common/pdf/pdf.module";
import { ProvaController } from "./prova.controller";
import { ProvaService } from "./prova.service";

@Module({
  controllers: [ProvaController],
  providers: [ProvaService],
  imports: [
    DatabaseModule,
    MulterModule.register({
      storage: diskStorage({
        destination: "./uploads/provas",
        filename: (req, file, cb) => {
          const filename = `${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
    PdfModule,
  ],
})
export class ProvaModule {}
