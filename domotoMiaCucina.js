const Domoto = require('domoto');
const StoveClient = require('./stoveClient');
const StoveController = require('./stoveController');
const viewPath = require('path').resolve(__dirname, './view.html');

module.exports = class DomotoMiaCucina extends Domoto {
  constructor() {
    super('domoto-mia-cucina');

    this.description = 'Mia cucina';
    const stove = new StoveClient();
    this.exportModule(stove);

    const view = this.addView(viewPath, StoveController, this.itemMenu, stove);
    this.itemMenu.on('click', this.viewManager.show(view));
  }
};
