import { Injectable, Logger } from '@nestjs/common';
import { StatusNotificationInterface } from '../interface/status-notification.interface';

@Injectable()
export class StatusNotificationHandler {
  private readonly logger = new Logger(StatusNotificationHandler.name);

  handler(
    client: WebSocket,
    uniqueId: string,
    payload: StatusNotificationInterface,
  ) {
    const { connectorId, status } = payload;
    // errorCode: _errorCode, sau dùng thì thêm vào
    this.logger.log(
      `Trạng thái thông báo: connector ${connectorId} | status: ${status}`,
    );
    const response = {};
    const result = [3, uniqueId, response];
    client.send(JSON.stringify(result));
  }
}
