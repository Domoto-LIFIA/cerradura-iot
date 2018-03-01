const io = require('socket.io-client');
const GPIO = require('onoff').Gpio;
const LED = new GPIO(17, 'out')

module.exports = class LockClient {
  constructor(url = 'http://cerradura-iot.herokuapp.com') {
    this.url = url;
    this._socket = io(url);
	
  }

  on(event, listener) {
    this._socket.on(event, listener);
  }

  open() {
	LED.writeSyn(1);
    return $.ajax({
      url: this._getUrl('/api/open'),
      method: 'POST',
      dataType: 'json',
    });
  }

  close() {
	LED.writeSyn(0);
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
