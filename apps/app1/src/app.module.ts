import { Lib1Module } from '@app/lib1';
import { Lib2Module } from '@app/lib2';
import { Lib3Module } from '@app/lib3';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [Lib1Module, Lib2Module, Lib3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
