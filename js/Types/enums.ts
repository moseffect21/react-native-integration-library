
/**
 *  Event types
 */

export enum DeviceConnectionEventType {
    PRINTER_CONNECTION_CHANGED = "PRINTER_CONNECTION_CHANGED",
    SCALES_CONNECTION_CHANGED = "SCALES_CONNECTION_CHANGED"
}

export enum ScannerEventType {
    BARCODE_RECEIVED = "BARCODE_RECEIVED"
}

export enum NavigationEventType {
    ACTIVITY_RESULT = "ACTIVITY_RESULT",
    BACK_PRESSED = "BACK_PRESSED"
}

export enum ProductEventType {
    PRODUCT_CARD_OPEN = "PRODUCT_CARD_OPEN"
}

export enum ReceiptEventType {
    SELL_RECEIPT_OPENED = "SELL_RECEIPT_OPENED",
    PAYBACK_RECEIPT_OPENED = "PAYBACK_RECEIPT_OPENED",
    SELL_RECEIPT_CLEARED = "SELL_RECEIPT_CLEARED",
    PAYBACK_RECEIPT_CLEARED = "PAYBACK_RECEIPT_CLEARED",
    SELL_RECEIPT_CLOSED = "SELL_RECEIPT_CLOSED",
    PAYBACK_RECEIPT_CLOSED = "PAYBACK_RECEIPT_CLOSED"
}

export enum PositionEventType {
    SELL_RECEIPT_POSITION_ADDED = "SELL_RECEIPT_POSITION_ADDED",
    PAYBACK_RECEIPT_POSITION_ADDED = "PAYBACK_RECEIPT_POSITION_ADDED",
    SELL_RECEIPT_POSITION_EDITED = "SELL_RECEIPT_POSITION_EDITED",
    PAYBACK_RECEIPT_POSITION_EDITED = "PAYBACK_RECEIPT_POSITION_EDITED",
    SELL_RECEIPT_POSITION_REMOVED = "SELL_RECEIPT_POSITION_REMOVED",
    PAYBACK_RECEIPT_POSITION_REMOVED = "PAYBACK_RECEIPT_POSITION_REMOVED"
}

export enum CashDrawerEventType {
    CASH_DRAWER_OPEN = "CASH_DRAWER_OPEN"
}

export enum CashOperationEventType {
    CASH_IN = "CASH_IN",
    CASH_OUT = "CASH_OUT"
}

export enum IntegrationServiceEventType {
    BEFORE_POSITIONS_EDITED = "BEFORE_POSITIONS_EDITED",
    RECEIPT_DISCOUNT = "RECEIPT_DISCOUNT",
    PAYMENT_SELECTED = "PAYMENT_SELECTED",
    PAYMENT_SYSTEM = "PAYMENT_SYSTEM",
    PRINT_GROUP_REQUIRED = "PRINT_GROUP_REQUIRED",
    PRINT_EXTRA_REQUIRED = "PRINT_EXTRA_REQUIRED"
}


/**
 * navigation
 */


export enum NavigationErrorMessage {
    TARGET_CLASS_NOT_FOUND = "TARGET_CLASS_NOT_FOUND",
    TARGET_PACKAGE_NOT_FOUND = "TARGET_PACKAGE_NOT_FOUND",
    TARGET_CLASS_NOT_EXPORTED = "TARGET_CLASS_NOT_EXPORTED"
}

/**
 * inventory
 */

export enum ProductType {
    NORMAL = "NORMAL",
    ALCOHOL_MARKED = "ALCOHOL_MARKED",
    ALCOHOL_NOT_MARKED = "ALCOHOL_NOT_MARKED",
    SERVICE = "SERVICE"
}

/**
 * Receipt
 */

export enum ReceiptType {
    SELL = "SELL",
    PAYBACK = "PAYBACK"
}

export enum TaxNumber {
    VAT_18 = "VAT_18",
    VAT_10 = "VAT_10",
    NO_VAT = "NO_VAT",
    VAT_18_118 = "VAT_18_118",
    VAT_10_110 = "VAT_10_110",
    VAT_0 = "VAT_0"
}

export enum TaxationSystem {
    COMMON = "COMMON",
    SIMPLIFIED_INCOME = "SIMPLIFIED_INCOME",
    SIMPLIFIELD_INCOME_OUTCOME = "SIMPLIFIELD_INCOME_OUTCOME",
    SINGLE_IMPUTED_INCOME = "SINGLE_IMPUTED_INCOME",
    SINGLE_AGRICULTURE = "SINGLE_AGRICULTURE",
    PATENT = "PATENT"
}

export enum PrintGroupType {
    CASH_RECEIPT = "CASH_RECEIPT",
    INVOICE = "INVOICE",
    string_UTII = "string_UTII"
}

/**
 * payment
 */

export enum PaymentType {
    UNKNOWN = "UNKNOWN",
    CASH = "CASH",
    ELECTRON = "ELECTRON"
}

export enum PaymentSystemOperationType {
    SELL = "SELL",
    SELL_CANCEL = "SELL_CANCEL",
    PAYBACK = "PAYBACK",
    PAYBACK_CANCEL = "PAYBACK_CANCEL"
}

/**
 * printables
 */


export enum BarcodeType {
    EAN8 = "EAN8",
    UPCA = "UPCA",
    EAN13 = "EAN13",
    CODE39 = "CODE39"
}