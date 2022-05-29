import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async getHtml() {
    return `
    <h1>Posts</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quidem exercitationem similique pariatur
        doloremque. Suscipit, nemo cupiditate eos ab illum necessitatibus velit voluptas non eius, veniam molestiae rem
        id quasi?</p>
    <p>lorem ipsum</p>
    <p>We the people</p>
    `;
  }
}
