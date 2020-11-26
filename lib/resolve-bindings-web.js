function resolveBindings () {
  if (!process.env.NOBLE_WEBSOCKET) {
    return require('./webbluetooth/bindings');
  }

  return require('./websocket/bindings');
}

module.exports = resolveBindings;
