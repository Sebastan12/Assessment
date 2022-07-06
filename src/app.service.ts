import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { resolve } from 'path';

@Injectable()
export class AppService {
  getHello(): object {
    return { msg: 'Hello World!' };
  }

  readAllFolders(): object {
    fs.readdir(resolve(__dirname, './public/folderToWatch'), (err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
    });
    return { msg: 'done' };
  }
}
