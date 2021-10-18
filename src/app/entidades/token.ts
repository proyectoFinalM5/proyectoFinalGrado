export interface TokenResponse {
    auth: {
        token: string,
        expIn: number
    },
    refresh: {
        token: string,
        expIn: number
    }
}