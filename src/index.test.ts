import bem, { c } from './index'

describe('bem helper', () => {
  test('test block declaration', () => {
    const button = bem('button')
    const res = button()
    expect(res).toEqual('button')
  })

  test('test block and element declaration', () => {
    const button = bem('button')
    const res = button('wrapper')
    expect(res).toEqual('button__wrapper')
  })

  test('test modifier declaration', () => {
    const button = bem('button')
    const res = button('wrapper', 'primary')
    expect(res).toEqual('button__wrapper--primary')
  })

  test('test modifier declaration and aditional class', () => {
    const button = bem('button')
    const res = button('wrapper', 'primary', 'other-class')
    expect(res).toEqual('button__wrapper--primary other-class')
  })

  test('test modifier declaration and two aditional class', () => {
    const button = bem('button')
    const res = button('wrapper', 'primary', 'other-class', 'another-class')
    expect(res).toEqual('button__wrapper--primary other-class another-class')
  })

  test('test modifier declaration and composed classes', () => {
    const button = bem('button')
    const res = button(
      'wrapper',
      'primary',
      'other-class',
      c({ 'may-show': true, 'my-not-show': false })
    )
    expect(res).toEqual('button__wrapper--primary other-class may-show')
  })
})
