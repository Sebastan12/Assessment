import { Controller, Get, Query } from '@nestjs/common';
import { FoldersService } from './folders.service';

@Controller('folders')
export class FoldersController {
  constructor(private foldersService: FoldersService) {}

  @Get()
  getFolders(): object {
    return this.foldersService.getAllFiles();
  }

  @Get('/filesize')
  getFilesize(@Query() query: { ftype: string }): object {
    return this.foldersService.getFilesize(query.ftype);
  }

  @Get('/scan')
  scanFolders(): object {
    return this.foldersService.scanFiles();
  }
}
