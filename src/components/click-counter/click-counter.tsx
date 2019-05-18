import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'click-counter',
  styleUrl: 'click-counter.scss',
  shadow: true
})
export class ClickCounter {

  @Prop() startnumber;
  @Prop() min;
  @Prop() max;
  @Prop() step;

  @State() number;

  componentWillLoad() {
    this.number = Number(this.startnumber) || 0;
  }

  @Watch('startnumber')
  updateStartnumber() {
    if(Number(this.startnumber) || Number(this.startnumber) === 0) {
      this.number = this.startnumber;
    }
  }

  addToNumber() {
    if(this.max && this.max <= this.number) {
      return;
    }
    this.number = this.number + (Number(this.step) || 1);
  }

  substractFromNumber() {
    if(this.min && this.min >= this.number) {
      return;
    }
    this.number = this.number - (Number(this.step) || 1);
  }

  resetNumber() {
    if(Number(this.min)) {
      return this.number = Number(this.min);
    }
    this.number = 0;
  }

  render() {
    return (<div class="click-counter">
        <div class="click-counter__number">{this.number}</div>
        <div class="click-counter__actions">
          <button class="click-counter__substract" onClick={this.substractFromNumber.bind(this)}>-</button>
          <button class="click-counter__add" onClick={this.addToNumber.bind(this)}>+</button>
        </div>
        <button class="click-counter__reset" onClick={this.resetNumber.bind(this)}>reset</button>
    </div>);
  }
}
