import { Test } from '@nestjs/testing';
import { TodoModule } from '../src/todo/todo.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TodoService } from '../src/todo/todo.service';

describe('Todos', () => {
  let app: INestApplication;
  const todoService = { findAll: () => [{ _id: 'id1', label: 'todo1' }] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      modules: [TodoModule],
    })
      .overrideProvider(TodoService)
      .useValue(todoService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('GET /todo', () => {
    return request(app.getHttpServer())
      .get('/todo')
      .expect(200)
      .expect(todoService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
