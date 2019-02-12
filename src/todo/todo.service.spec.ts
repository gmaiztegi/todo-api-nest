import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should start empty', () => {
    expect(service.findAll()).toHaveLength(0);
  });

  it('should add elements', () => {
    const todo1 = 'todo1';

    const id = service.add(todo1);

    const todos = service.findAll();
    expect(todos).toHaveLength(1);
    expect(todos[0].label).toBe(todo1);
    expect(todos[0]._id).toBe(id);
  });

  it('should delete elements', () => {
    const todo1 = 'todo1';
    const todo2 = 'todo2';

    const id1 = service.add(todo1);
    const id2 = service.add(todo2);
    expect(service.findAll()).toHaveLength(2);

    service.delete(id1);

    const todos = service.findAll();
    expect(todos).toHaveLength(1);
    expect(todos[0]._id).toBe(id2);
  });
});
