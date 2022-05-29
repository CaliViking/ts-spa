import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
    <h1>This is a dashboard</h1>
    <p>lorem ipsum</p>
    <p>We the people - Title ${document.title}</p>
    <a href='/posts' data-link>View recent posts</a>
    `;
  }
}
