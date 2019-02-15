import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { TodoModule } from './todo/todo.module';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TodoModule,
  ],
})
export class AppModule {}
