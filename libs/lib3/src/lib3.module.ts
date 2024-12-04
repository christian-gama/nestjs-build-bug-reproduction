import { Module } from '@nestjs/common';
import { Lib3Service } from './lib3.service';

@Module({
  providers: [Lib3Service],
  exports: [Lib3Service],
})
export class Lib3Module {}
