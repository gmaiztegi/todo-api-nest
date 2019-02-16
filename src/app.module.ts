import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from 'nestjs-config';
import { TodoModule } from './todo/todo.module';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TerminusModule.forRoot({
      endpoints: [{ url: '/health', healthIndicators: [] }],
    }),
    TodoModule,
  ],
})
export class AppModule {}
