export type ClassObject = Record<string, boolean | any>;

export type ClassArray = Class[];

export type Class = string | number | ClassObject | ClassArray;

export default function classes(obj: Class): string {
  let out = '';

  if (typeof obj === 'string' || typeof obj === 'number') return String(obj) || '';

  if (Array.isArray(obj)) {
    for (let k = 0; k < obj.length; k += 1) {
      const tmp = classes(obj[k]);
      if (tmp !== '') out += (out && ' ') + tmp;
    }
  } else {
    Object.entries(obj).forEach(([key, value]) => {
      if (Object.prototype.hasOwnProperty.call(obj, key) && value) {
        out += (out && ' ') + key;
      }
    });
  }
  return out;
}
