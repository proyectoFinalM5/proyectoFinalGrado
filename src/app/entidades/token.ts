export interface TokenResponse {
    auth: {
        token: String,
        expiredIn: Number
    },
    refresh: {
        token: String,
        expiredIn: Number
    }
}