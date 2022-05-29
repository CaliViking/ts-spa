import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Post Details');
  }

  async getHtml() {
    console.log(`Hello ${JSON.stringify(this.params)}`);
    console.log(`Hello ${this.params.id}`);
    return `
    <h1>Posts</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quidem exercitationem similique pariatur
        doloremque. Suscipit, nemo cupiditate eos ab illum necessitatibus velit voluptas non eius, veniam molestiae rem
        id quasi?</p>
    <p>lorem ipsum</p>
    <p>I got the params ${JSON.stringify(this.params)}</p>
    `;
  }
}
