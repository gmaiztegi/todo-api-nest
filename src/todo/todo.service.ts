import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';
import { generate } from 'shortid';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  add(label: string) {
    this.todos.push({ _id: generate(), label });
  }

  delete(id: string) {
    const index = this.todos.findIndex(({ _id }) => _id === id);
    this.todos.splice(index, 1);
  }
}
