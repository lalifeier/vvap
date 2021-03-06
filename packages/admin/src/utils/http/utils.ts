import { cloneDeep } from 'lodash-es'
import qs from 'qs'

export function generateReqKey(config) {
  const { method, url, params, data } = config
  return [method, url, qs.stringify(params), qs.stringify(data)].join('&')
}

export function getFormData(data) {
  const formData = new FormData()
  Object.keys(data).forEach((key) => {
    const value = data[key]
    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(`${key}[]`, item)
      })
      return
    }

    formData.append(key, value)
  })
  return formData
}

export function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((item) => {
      return encodeURIComponent(item) + '=' + encodeURIComponent(obj[item])
    })
    .join('&')
}

export function paramsToObject(params) {
  const urlParams = new URLSearchParams(params)
  return Object.fromEntries(urlParams)
}

export const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {},
  )

export const filterParams = (params: Record<string, unknown>) => {
  const data: Record<string, unknown> = {}
  for (const k in params) {
    const value = params[k]
    if (value !== '' && value !== null && value !== undefined) {
      data[k] = value
    }
  }
  return data
}

export function clearEmptyParam(config) {
  ;['data', 'params'].forEach((item) => {
    if (config[item]) {
      const keys = Object.keys(config[item])
      if (keys.length) {
        keys.forEach((key) => {
          const rawType = toRawType(config[item])
          if (['', undefined, null].includes(config[item][key]) && ['Object'].includes(rawType)) {
            config[item] = cloneDeep(config[item])
            delete config[item][key]
          }
        })
      }
    }
  })
}

export function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
