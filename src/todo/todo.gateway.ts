import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { TodoService } from './todo.service';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class TodoGateway {
  constructor(private readonly todoService: TodoService) {}

  @SubscribeMessage('initialize')
  async initialize(client: Socket, payload: any): Promise<any> {
    const todos = this.todoService.findAll();
    client.emit('todos', todos);
  }

  @SubscribeMessage('add')
  async add(client: Socket, payload: string) {
    this.todoService.add(payload);

    const todos = this.todoService.findAll();
    client.broadcast.emit('todos', todos);
    client.emit('todos', todos);
  }

  @SubscribeMessage('delete')
  async delete(client: Socket, payload: string) {
    this.todoService.delete(payload);
    const todos = this.todoService.findAll();
    client.broadcast.emit('todos', todos);
    client.emit('todos', todos);
  }
}
