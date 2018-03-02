const GPIO = require('../onoff').Gpio;
var LED = new GPIO(17,'out');

module.exports = class LockController {
    constructor(view, itemMenu, lockClient) {

      this._itemMenu = itemMenu;
      this._client = lockClient;
      this._open = view.querySelector('#abrir');
  
      const header = view.querySelector('.card-content');
     
      this._client.on('status', status => this._statusChange(status));
      this._client.on('error', err => this._connectionError(err));
      this._open.addEventListener('click', e => this.toggleOpen(e));
		
  }
  
    get isOpen() {
      return this._open.checked;
    }
  
    set _isOpen(value) {
      this._itemMenu.iconOn = value;
      this._open.checked = value;
    }
  
  
    open() {
		this._client.open();
		//LED.writeSync(1);
    }
  
    close() {
		this._client.close();
		//LED.writeSync(0);
    }
  
    toggleOpen() {
      this.isOpen ? this.open() : this.close();
    }
  
    _connectionError(err) {
      console.error(err);
    }

	_statusChange(status) {
    	this._isOpen = status.isOpen;
	}
 };
