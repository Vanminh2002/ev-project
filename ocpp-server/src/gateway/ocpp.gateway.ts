import { Injectable, Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { WebSocket, Server } from 'ws';
import { OcppService } from '../services/ocpp.service';

@Injectable()
@WebSocketGateway({ port: 9000, path: '/' }) // path trùng với CP sẽ connect
export class OcppGateway implements OnGatewayConnection, OnGatewayInit {
  @WebSocketServer()
  server: Server;
  private readonly logger = new Logger(OcppGateway.name);

  constructor(private readonly ocppService: OcppService) {}

  afterInit() {
    console.log('Ocpp WebSocket đã được khởi tạo');
  }

  handleConnection(client: WebSocket, ...args: any[]) {
    // Khởi tạo kết nối mới
  }
}
