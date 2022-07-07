import { Module } from '@nestjs/common';
import { FoldersModule } from './folders/folders.module';
import { PrismaModule } from './prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [FoldersModule, PrismaModule, ScheduleModule.forRoot()],
})
export class AppModule {}
