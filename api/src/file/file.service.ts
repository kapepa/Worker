import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {MulterModuleOptions, MulterOptionsFactory} from "@nestjs/platform-express";
import { v1 as uuid } from 'uuid';
import {diskStorage, StorageEngine} from "multer";
import * as path from 'path';
import * as fs from "fs"
import {of} from "rxjs";

export function createMulterOptions(): MulterModuleOptions {
  return {
    storage: diskStorage({
      destination: path.join(__dirname, "..", "..", "static"),
      filename: async function (req, file, cb) {
        const filename = file.originalname;
        const prefix = filename.split(".").pop();
        const newFilename = `${uuid()}.${prefix}`;
        await cb(null, newFilename);
      }
    }),
    fileFilter(req, file, callback: (error: (Error | null), acceptFile: boolean) => void) {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new HttpException('Only image files are allowed!', HttpStatus.BAD_REQUEST), false);
      }
      callback(null, true);
    }
  };
}

@Injectable()
export class FileService {

  removeFile(filename: string) {
    const pathToFile = path.join(__dirname, "..", "..", "static");
    const exist = fs.existsSync( `${pathToFile}/${filename}` )
    if(!exist) new HttpException('An error occurred when deleting the old avatar.', HttpStatus.BAD_REQUEST)
    fs.unlinkSync(`${pathToFile}/${filename}`);

    return of(true);
  }
}
