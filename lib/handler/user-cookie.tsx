import { getConfig, setConfig } from './cookie'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

export const setAccessToken = async (accessToken: string, cookies: ReadonlyRequestCookies) => {
  const config = getConfig(cookies)
  if (accessToken) config.accessToken = accessToken
  setConfig(config, cookies)
}

export const getAccessToken = (cookies: ReadonlyRequestCookies) => {
  const config = getConfig(cookies)
  return config.accessToken
}
