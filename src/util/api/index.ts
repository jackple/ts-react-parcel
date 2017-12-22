import http from './http'

export function getUserInfo(data): Promise<any> {
  return http.get('/repository/get', data || {})
}

export function getError(data): Promise<any> {
  return http.get('error', data || {})
}
