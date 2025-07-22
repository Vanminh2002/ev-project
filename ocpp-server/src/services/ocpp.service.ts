import { Injectable, Logger } from '@nestjs/common';
import { BootNotificationHandler } from '../handlers/boot-notification.handler';
import { StatusNotificationHandler } from '../handlers/status-notification.handler';
import { HeartbeatHandler } from '../handlers/heartbeat.handler';
import { StatusNotificationInterface } from '../interface/status-notification.interface';

@Injectable()
export class OcppService {
  private readonly logger = new Logger(OcppService.name); // create private logger
  // inject services , handlers
  constructor(
    private readonly bootNotification: BootNotificationHandler,
    private readonly statusNotificationHandler: StatusNotificationHandler,
    private readonly heartbeatHandler: HeartbeatHandler,
  ) {}

  handleCall(
    client: WebSocket,
    uniqueId: string,
    action: string,
    payload: StatusNotificationInterface,
  ) {
    switch (action) {
      case 'bootNotification':
        return this.bootNotification.handle(client, uniqueId, payload);
      case 'statusNotificationHandler':
        return this.bootNotification.handle(client, uniqueId, payload);
      case 'heartbeatHandler':
        return this.bootNotification.handle(client, uniqueId, payload);
      default:
        this.logger.warn(`Không hỗ trợ trạng thái : ${action}`);
    }
  }
}
