export type MessageTypeId = 2 | 3 | 4;
export type OcppCallMessage = [
  2,
  uniqueId: string,
  action: string,
  payload: any,
];
export type OcppCallResult = [3, uniqueId: string, payload: any];
export type OcppCallError = [
  4,
  uniqueId: string,
  errorDetail: {
    errorCode: string;
    errorDescription: string;
    errorDetails?: Record<string, any>;
  },
];
export type OcppMessage = OcppCallMessage | OcppCallResult | OcppCallError;
