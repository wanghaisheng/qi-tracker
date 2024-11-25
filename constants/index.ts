export const appName = '气的乐章'
export const appDescription = '人活一口气,这是一款围绕着气的管理，包括心肝脾肺肾等等症状记录，自我护理的小工具'

export const iconfontUrl = '//at.alicdn.com/t/c/font_178634_5lx1rpvocj2.js'

let _proxyBaseURL = 'https://worker.powerfulyang.com'

// eslint-disable-next-line node/prefer-global/process
if (process.env.API_ENV === 'local')
  _proxyBaseURL = 'http://localhost:8787'

export const proxyBaseURL = _proxyBaseURL
