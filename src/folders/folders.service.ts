import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { PrismaService } from '../prisma/prisma.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class FoldersService {
  basePath = path.join(process.cwd(), 'dist');
  folderPathToWatch = '/public/folderToWatch';
  directoryPath = path.join(this.basePath, this.folderPathToWatch);

  constructor(private prisma: PrismaService) {}

  async getAllFiles() {
    const allFiles = await this.prisma.file.findMany({});
    return { files: allFiles };
  }

  async getFilesize(ftype: string) {
    if (!ftype) {
      const allFiles = await this.prisma.file.findMany({
        orderBy: [
          {
            filesize: 'desc',
          },
        ],
      });
      return { files: allFiles };
    }
    if (ftype) {
      const allFiles = await this.prisma.file.findMany({
        orderBy: [
          {
            filesize: 'desc',
          },
        ],
        where: {
          filetype: ftype,
        },
      });
      return { files: allFiles };
    }
  }

  //was not exactly sure if I should recursively search the subdirectories here as well
  private scanDirectory(directory: string): object {
    let listOfFilePaths: string[] = [];
    try {
      listOfFilePaths = fs
        .readdirSync(directory, { withFileTypes: true })
        //.filter((item) => !item.isDirectory())
        .map((item) => path.join(directory, item.name));
    } catch (err) {
      console.log(err);
    }
    return { paths: listOfFilePaths };
  }

  async scanFiles() {
    //clean database
    await this.prisma.file.deleteMany({});
    //scan folder
    const fileList: object[] = [];
    for (const element of this.scanDirectory(this.directoryPath)['paths']) {
      try {
        //file exists
        const parsedPath = path.parse(element);
        const file = await this.prisma.file.create({
          data: {
            path: element,
            filename: parsedPath.name,
            filetype: parsedPath.ext,
            filesize: fs.statSync(element)['size'],
            modificationdate: fs.statSync(element)['mtime'],
          },
        });
        console.log(file);
        fileList.push(file);
      } catch (err) {
        //assuming the file does not xist anymore
        console.log(err);
      }
    }
    return { files: fileList };
  }

  @Cron('* * * * *')
  private cronScanFiles() {
    console.log('Cron Start - Scan all Files');
    this.scanFiles();
    console.log('Cron End - Scan all Files');
  }
}
