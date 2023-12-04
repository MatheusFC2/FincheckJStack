declare class Env {
    jwtSecret: string;
    databaseUrl: string;
}
export declare const env: Env;
export declare const errors: import("class-validator").ValidationError[];
export {};
