import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [{ label: 'HEYEE' }, { label: 'EI' }];

  getTodos(): Todo[] {
    return this.todos;
  }
}
