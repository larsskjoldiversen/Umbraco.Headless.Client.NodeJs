import { CDNClient, ManagerClient, MediaClient } from "./Clients";
import { Endpoint } from "./Endpoint";
import { ApiRequest } from "./ApiRequest";
export interface ClientOptions {
    baseUrl?: string;
    projectAlias: string;
    language: string;
}
export declare class Client {
    readonly options: ClientOptions;
    private _baseUrl;
    private _apiKey;
    constructor(options: ClientOptions);
    readonly cdn: CDNClient;
    readonly media: MediaClient;
    readonly manager: ManagerClient;
    /**
     * Makes request from and [Endpoint]
     */
    makeRequest: <R>(endpoint: Endpoint<R, any>, data?: any) => ApiRequest<R>;
    private makeUrl;
    setAPIKey: (apikey: string) => void;
    getAPIKey: () => string;
}
