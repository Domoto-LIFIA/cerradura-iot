module.exports = class LockController {
    constructor(view, itemMenu, lockClient) {
      //this._temperatures = null;
      this._itemMenu = itemMenu;
      this._client = lockClient;
      //this._time = view.querySelector('#tiempo');
      this._open = view.querySelector('#abrir');
      //this._temperatures = [view.querySelector('#high'),
        //view.querySelector('#medium'), view.querySelector('#low')];
  
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
      //this._iconFire.innerText = value ? 'whatshot' : '';
      this.disabled = this.disabled;
    }
  
    get disabled() {
      return this.isOpen;
    }
  
    set disabled(value) {
      //
    }
  
    open() {
      this._client.open();
    }
  
    close() {
      this._client.close();
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
