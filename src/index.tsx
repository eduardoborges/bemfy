import c from './classes'

const bem = (block: string = 'block') => {
  return (element?: string, modifier?: string, ...others: string[]) => {
    let blockEl = block
    if (element) blockEl = `${blockEl}__${element}`
    if (modifier) blockEl = `${blockEl}--${modifier}`
    return c([blockEl, ...others])
  }
}

export default bem
export { c }
