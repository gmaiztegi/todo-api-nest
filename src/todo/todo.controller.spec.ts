import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

describe('Todo Controller', () => {
  let controller: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoService = module.get<TodoService>(TodoService);
    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of todos', () => {
      const result: Todo[] = [{ _id: 'id1', label: 'todo1' }];
      jest.spyOn(todoService, 'findAll').mockImplementation(() => result);

      expect(controller.findAll()).toBe(result);
    });
  });
});
