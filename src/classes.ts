/* eslint-disable no-prototype-builtins */
var isArray = Array.isArray

export interface ClassObject {
  [key: string]: boolean | any
}

export interface ClassArray extends Array<Class> {}

export type Class = string | number | ClassObject | ClassArray

export default function cc(obj: Class): string {
  var out = ''

  if (typeof obj === 'string' || typeof obj === 'number')
    return String(obj) || ''

  if (isArray(obj)) {
    for (var k = 0, tmp; k < obj.length; k++) {
      if ((tmp = cc(obj[k])) !== '') {
        out += (out && ' ') + tmp
      }
    }
  } else {
    Object.entries(obj).map(([k, v]) => {
      if (obj.hasOwnProperty(k) && v) out += (out && ' ') + k
    })
  }
  return out
}
