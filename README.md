# bemfy [![NPM](https://img.shields.io/npm/v/bemfy.svg)](https://www.npmjs.com/package/bemfy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A stupid simple BEM compose helper to keep your HTML clean.


- Works with any library/framework.
- Add and remove independent class names with truthy or falsy value.
- Fast!
- Ridiculously tiny at less [500B](http://bundlephobia.com/result?p=bemfy).
- No deps

## Install

```bash
npm install --save bemfy
```

## Usage

```tsx
import React from 'react';
import bemfy, { c } from 'bemfy'

const Component = () => {
  const b = bemfy("custom-button");

  return <div className={b('wrapper')}>
    <div className={b('text', 'white')}>The lazy cat jumps over dizzy fox</div>
    <button className={b('button', 'primary')}>Jump!</button>
  </div>
}

export default Component;
```

This will render:

```html
<div class="custom-button__wrapper">
  <div class="custom-button__text--white">The lazy cat jumps over dizzy fox</div>
  <button class="custom-button__button--primary">Jump!</button>
</div>
```

## License

MIT © [Eduardo Borges](https://github.com/eduardoborges)
