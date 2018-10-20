import isArray from '../data/isArray'
import isTransformer from '../data/isTransformer'

/**
 * Returns a function that dispatches with different strategies based on the object in list position (last argument). If it is an array, executes [fn].
 *
 * Otherwise, if it has a function with one of the given method names, it will execute that function (functor case).

 *Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 *
 * Otherwise, it will default to executing [fn].
 *
 * @function
 * @since v0.0.6
 * @category common
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @returns {Function} A function that dispatches on object in list position
 */
const dispatchable = (methodNames, xf, fn) =>
  function() {
    if (arguments.length === 0) {
      return fn()
    }
    const args = Array.prototype.slice.call(arguments, 0)
    const obj = args.pop()
    if (!isArray(obj)) {
      let idx = 0
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args)
        }
        idx += 1
      }
      if (isTransformer(obj)) {
        const transducer = xf.apply(null, args)
        return transducer(obj)
      }
    }
    return fn.apply(this, arguments)
  }

export default dispatchable