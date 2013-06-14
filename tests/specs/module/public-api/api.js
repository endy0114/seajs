define(function(require, exports, mod) {

  var test = require('../../../test')
  var assert = test.assert

  var toString = {}.toString

  function isFunction(obj) {
    return toString.call(obj) === "[object Function]"
  }

  var isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]"
  }

  
  // define
  assert(isFunction(define), 'define')

  
  // seajs
  assert(seajs, 'seajs')
  assert(typeof(seajs.version) === 'string', seajs.version)

  assert(isFunction(seajs.config), 'seajs.config')
  assert(isFunction(seajs.use), 'seajs.use')
  assert(isFunction(seajs.log), 'seajs.log')

  assert(isFunction(seajs.on), 'seajs.on')
  assert(isFunction(seajs.emit), 'seajs.emit')
  assert(isFunction(seajs.off), 'seajs.off')

  assert(typeof(seajs.cache) === 'object', 'seajs.cache')
  assert(typeof(seajs.data) === 'object', 'seajs.data')
  assert(typeof(seajs.data.events) === 'object', 'data.events')
  assert(typeof(seajs.data.fetchedList) === 'object', 'data.fetchedList')

  assert(isFunction(seajs.Module), 'seajs.Module')
  assert(isFunction(seajs.resolve), 'seajs.resolve')
  assert(isFunction(seajs.require), 'seajs.require')

  assert(getOwnPropertyCount(seajs) === 12, getOwnPropertyCount(seajs))


  // Module
  var Module = seajs.Module
  assert(typeof Module.STATUS === 'object', 'Module.STATUS')
  assert(isFunction(Module.load), 'Module.load')
  //assert(Module.define, 'Module.define')
  assert(isFunction(Module.prototype._load), 'Module.prototype._load')
  assert(isFunction(Module.prototype._fetch), 'Module.prototype._fetch')
  //assert(isFunction(Module.prototype.execute), 'Module.prototype.execute')
  //assert(isFunction(Module.prototype.destroy), 'Module.prototype.destroy')
  assert(getOwnPropertyCount(Module) === 2, getOwnPropertyCount(Module))
  assert(getOwnPropertyCount(Module.prototype) === 2, getOwnPropertyCount(Module.prototype))

  
  // require
  assert(isFunction(require), 'require')
  //assert(require.cache === seajs.cache, 'require.cache')
  assert(isFunction(require.resolve), 'require.resolve')
  assert(isFunction(require.async), 'require.async')
  assert(getOwnPropertyCount(require) === 2, getOwnPropertyCount(require))

  
  // exports
  assert(exports === mod.exports, 'exports')

  
  // module
  //assert(mod instanceof Module, 'module')
  assert(typeof mod.id === 'string', 'module.id')
  assert(typeof mod.uri === 'string', 'module.uri')
  assert(isArray(mod.dependencies), 'module.dependencies')
  assert(typeof mod.exports === 'object', 'module.exports')
  assert(isFunction(mod.factory), 'module.factory')
  assert(mod.status === 4, 'module.status')

  assert(isArray(mod._callbacks), 'module._callbacks')
  assert(typeof (mod._resolveCache) === 'object', 'module._resolveCache')

  //assert(isArray(mod.waitings), 'module.waitings')
  //assert(typeof mod.options === 'object', 'module.options')
  //assert(mod.parent instanceof Module, 'module.parent')
  //assert(mod.parent.parent === undefined, 'module.parent.parent')
  //assert(isFunction(mod.load), 'module.load')

  assert(getOwnPropertyCount(mod) === 8, getOwnPropertyCount(mod))


  test.next()


  function getOwnPropertyCount(o) {
    var n = 0
    for (var p in o) {
      // Old safari would get prototype
      if (o.hasOwnProperty(p) && p !== 'prototype') {
        n++
      }
    }
    return n
  }

})
