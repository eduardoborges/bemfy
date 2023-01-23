import React from 'react';
import bemfy, { c } from '../src/bemfy';

export default function Component() {
  const b = bemfy('custom-button');

  return (
    <div className={b('wrapper')}>
      <div className={b('text', 'white')}>The lazy cat jumps over dizzy fox</div>
      <button
        type="button"
        className={b('button', 'primary', 'independent-class', c({ 'not-render': false, 'will-render': true }))}
      >
        Jump!

      </button>
    </div>
  );
}
