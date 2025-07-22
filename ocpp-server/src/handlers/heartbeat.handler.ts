import { Injectable, Logger } from '@nestjs/common';
import WebSocket from 'ws';

@Injectable()
export class HeartbeatHandler {
  private readonly logger = new Logger(HeartbeatHandler.name);

  handle(client: WebSocket, uniqueId: string) {
    this.logger.log('Nhận được Hearbeat');
    const response = {
      currentTime: new Date().toString(),
    };
    const result = [3, uniqueId, response];

    if (client.readyState == WebSocket.OPEN) {
      client.send(JSON.stringify(result));
    } else {
      this.logger.warn('Client WebSocket không ở trạng thái OPEN');
    }
  }
}
