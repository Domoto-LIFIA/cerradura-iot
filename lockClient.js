const io = require('socket.io-client');

module.exports = class LockClient {
  constructor(url = 'http://mia-cucina.herokuapp.com') {
    this.url = url;
    this._socket = io(url);
  }

  on(event, listener) {
    this._socket.on(event, listener);
  }

  open(data) {
    return $.ajax({
      url: this._getUrl('/api/open'),
      method: 'POST',
      data: data,
      dataType: 'json',
    });
  }

  close() {
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
