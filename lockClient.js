const io = require('socket.io-client');
const GPIO = require('../onoff').Gpio;

module.exports = class LockClient {
  constructor(url = 'http://cerradura-iot.herokuapp.com') {
    this.url = url;
    this._socket = io(url);
	this._led = GPIO(17,'out');
  }

  on(event, listener) {
    this._socket.on(event, listener);
  }

  open() {
	//this._led.writeSync(1);
	//LED.writeSync(1);
    return $.ajax({
      url: this._getUrl('/api/open'),
      method: 'POST',
      dataType: 'json',
    });
  }

  close() {
	//LED.writeSync(0);
    return $.ajax({
      url: this._getUrl('/api/close'),
      method: 'POST',
      dataType: 'json',
    });
  }

  status() {
    return $.getJSON(this._getUrl('/api/status'));
  }

  _getUrl(path) {
    return `${this.url}${path}`;
  }
};
