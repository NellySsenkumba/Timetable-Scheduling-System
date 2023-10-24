export const BASEURL: string = 'http://localhost:8085/api/v1/'

export interface ApiResponse<T> {
    status: string,
    data: T
}