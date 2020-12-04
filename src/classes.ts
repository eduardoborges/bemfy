export interface ClassObject {
  [key: string]: boolean | unknown
}

export interface ClassArray extends Array<Class> {}

export type Class = string | number | ClassObject | ClassArray

const isArray = Array.isArray

export default function classes(obj: Class): string {
  var out = ''

  if (typeof obj === 'string' || typeof obj === 'number')
    return String(obj) || ''

  if (isArray(obj)) {
    for (var k = 0, tmp; k < obj.length; k++) {
      if ((tmp = classes(obj[k])) !== '') {
        out += (out && ' ') + tmp
      }
    }
  } else {
    for (const key in obj) {
      const value = obj[key]
      if (Object.prototype.hasOwnProperty.call(obj, key) && value) {
        out += (out && ' ') + key
      }
    }
  }
  return out
}
