import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly toodService: TodoService) {}

  @Get()
  findAll() {
    return this.toodService.getTodos();
  }
}
