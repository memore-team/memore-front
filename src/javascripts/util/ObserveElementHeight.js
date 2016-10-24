export default class ObserveElementHeight {
  constructor(id, el, callback) {
    this.id = id;
    this.el = el;
    this.callback = callback;
    this.height = el.clientHeight;
    this.timer = setInterval(this.check.bind(this), 300);
  }

  check() {
    if (this.height !== this.el.clientHeight) {
      this.height = this.el.clientHeight;
      this.callback();
    }
  }

  getOuterHeight() {
    const style = this.el.currentStyle || document.defaultView.getComputedStyle(this.el, '');
    return this.height + parseInt(style.marginBottom, 10);
  }
}
