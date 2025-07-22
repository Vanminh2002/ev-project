import { Injectable, Logger } from '@nestjs/common';
import { StatusNotificationInterface } from '../interface/status-notification.interface';

@Injectable()
export class BootNotificationHandler {
  private readonly logger = new Logger(BootNotificationHandler.name);

  handle(
    client: WebSocket,
    uniqueId: string,
    payload: StatusNotificationInterface,
  ) {
    const { chargePointVendor, chargePointModel } = payload;
    this.logger.log(
      `🔌 BootNotification: ${chargePointVendor} | ${chargePointModel}`,
    );

    // TODO: Ghi vào DB

    const response = {
      currentTime: new Date().toISOString(),
      interval: 300,
      status: 'Accepted',
    };

    const result = [3, uniqueId, response];
    client.send(JSON.stringify(result));
  }
}
