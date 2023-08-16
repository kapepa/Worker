import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from './file.service';
import * as fs from "fs";
import * as path from 'path';
import {HttpException, HttpStatus} from "@nestjs/common";

describe('FileService', () => {
  let service: FileService;
  const pathToFile = path.join(__dirname, "..", "..", "static");
  const mockFile = "mockImage.png";
  const toPath = `${pathToFile}/${mockFile}`;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileService],
    }).compile();

    service = module.get<FileService>(FileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should be delete file on filename", () => {
    const spyExistsSync = jest.spyOn(fs, 'existsSync').mockImplementation(() => true);
    const spyUnlinkSync = jest.spyOn(fs, 'unlinkSync').mockImplementation(() => true);

    service.removeFile(mockFile).subscribe({
      next: (res) => {
        expect(res).toBeTruthy();
        expect(spyExistsSync).toHaveBeenCalledWith(toPath);
        expect(spyUnlinkSync).toHaveBeenCalledWith(toPath);
      }
    })
  })

  it("should be delete file on filename", () => {
    const spyExistsSync = jest.spyOn(fs, 'existsSync').mockImplementation(() => false);

    service.removeFile(mockFile).subscribe({
      error: (res) => {
        expect(res).toEqual(new HttpException('An error occurred when deleting the old avatar.', HttpStatus.BAD_REQUEST));
        expect(spyExistsSync).toHaveBeenCalledWith(toPath);
      }
    })

  })

});
