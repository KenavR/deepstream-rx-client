export interface IClientOptions {
    reconnectIntervalIncrement?:number;
    maxReconnectAttempts?:number;
    rpcAckTimeout?:number;
    rpcResponseTimeout?:number;
    subscriptionTimeout?:number;
    maxMessagesPerPacket?:number;
    timeBetweenSendingQueuedPackages?:number;
    recordReadAckTimeout?:number;
    recordReadTimeout?:number;
    recordDeleteTimeout?:number;
    upgrade?:boolean;
    forceJSONP?:boolean;
    jsonp?:boolean;
    forceBase64?:boolean;
    enablesXDR?:boolean;
    timestampRequests?:boolean;
    timestampParam?:string;
    path?:string;
    transports?:Array<string>;
    rememberUpgrade?:boolean;
}