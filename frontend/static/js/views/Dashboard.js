import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
    <h1>This is a dashboard</h1>
    <p>lorem ipsum</p>
    <p>We the people</p>
    `;
  }
}
