import { Component, h } from '@stencil/core';

@Component({
  tag: 'your-counter',
  styleUrl: 'your-counter.scss',
  shadow: true
})
export class YourCounter {

  render() {
    return (<div class="click-counter">
        <div class="click-counter__number">0</div>
        <div class="click-counter__actions">
          <button class="click-counter__substract">-</button>
          <button class="click-counter__add">+</button>
        </div>
        <button class="click-counter__reset">reset</button>
    </div>);
  }
}
