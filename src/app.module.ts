import { Module } from '@nestjs/common';
import { FoldersModule } from './folders/folders.module';

@Module({
  imports: [FoldersModule],
})
export class AppModule {}
