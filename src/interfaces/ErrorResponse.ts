export interface ErrorResponse {
    message?: string | null
    source?: string | null
    sourceValue?: string | null
    statusCode: number
}
