import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizeHandler {
  handle(payload: any, stationId: string) {
    console.log(`📥 BootNotification from ${stationId}:`, payload);

    return {
      currentTime: new Date().toISOString(),
      interval: 300,
      status: 'Accepted',
    };
  }
}
