import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
    <h1>This is settings</h1>
    <p>lorem ipsum</p>
    <p>We the people</p>
    `;
  }
}
