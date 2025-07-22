export interface StatusNotificationInterface {
  connectorId: string;
  status: string;
  errorCode: string;
  info?: string;
  timestamp?: string;
  vendorId?: string;
  vendorErrorCode?: string;
  chargePointVendor: string;
  chargePointModel: string;
}
