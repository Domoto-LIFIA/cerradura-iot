const Domoto = require('domoto');
const LockClient = require('./lockClient');
const LockController = require('./lockController');
const viewPath = require('path').resolve(__dirname, './view.html');

module.exports = class DomotoLock extends Domoto {
  constructor() {
    super('cerraduraIoT');

    this.description = 'Cerradura IoT';
    const lock = new LockClient();
    this.exportModule(lock);

    const view = this.addView(viewPath, LockController, this.itemMenu, lock);
    this.itemMenu.on('click', this.viewManager.show(view));
  }
};