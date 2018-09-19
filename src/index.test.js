describe('index', () => {
  test('require runs without error', () => {
    expect(() => {
      require('./')
    }).not.toThrow()
  })

  test('has config methods', () => {
    const mod = require('./')
    expect(mod).toMatchObject({
      createConfig: expect.any(Function),
      getConfig: expect.any(Function),
      getServerlessrcPath: expect.any(Function)
    })
  })

  test('has data methods', () => {
    const mod = require('./')
    expect(mod).toMatchObject({
      __: expect.any(Object),
      addIndex: expect.any(Function),
      always: expect.any(Function),
      any: expect.any(Function),
      anyAtIndex: expect.any(Function),
      append: expect.any(Function),
      arrayLikeKeys: expect.any(Function),
      assoc: expect.any(Function),
      assocIndex: expect.any(Function),
      assocPath: expect.any(Function),
      assocProp: expect.any(Function),
      baseGetTag: expect.any(Function),
      castPath: expect.any(Function),
      contains: expect.any(Function),
      curry: expect.any(Function),
      defn: expect.any(Function),
      endsWith: expect.any(Function),
      find: expect.any(Function),
      findAtIndex: expect.any(Function),
      forEach: expect.any(Function),
      forEachIndexed: expect.any(Function),
      forEachObjIndexed: expect.any(Function),

      // NOTE BRN: This is commented out because it causes an extremely long diff to happen in Jest
      // freeGlobal: expect.any(Object),
      generateRandomId: expect.any(Function),
      get: expect.any(Function),
      getPath: expect.any(Function),
      getProp: expect.any(Function),
      getTag: expect.any(Function),
      has: expect.any(Function),
      hasPath: expect.any(Function),
      hasProp: expect.any(Function),
      is: expect.any(Function),
      isArguments: expect.any(Function),
      isArray: expect.any(Function),
      isArrayLike: expect.any(Function),
      isBuffer: expect.any(Function),
      isEmpty: expect.any(Function),
      isFunction: expect.any(Function),
      isGenerator: expect.any(Function),
      isGeneratorFunction: expect.any(Function),
      isIndex: expect.any(Function),
      isInteger: expect.any(Function),
      isIterable: expect.any(Function),
      isIterator: expect.any(Function),
      isKey: expect.any(Function),
      isLength: expect.any(Function),
      isMap: expect.any(Function),
      isNil: expect.any(Function),
      isNull: expect.any(Function),
      isNumber: expect.any(Function),
      isObject: expect.any(Function),
      isObjectLike: expect.any(Function),
      isPlainFunction: expect.any(Function),
      isPlainObject: expect.any(Function),
      isPromise: expect.any(Function),
      isPrototype: expect.any(Function),
      isString: expect.any(Function),
      isSymbol: expect.any(Function),
      isTransformer: expect.any(Function),
      isTypedArray: expect.any(Function),
      isUndefined: expect.any(Function),
      isUrl: expect.any(Function),
      keys: expect.any(Function),
      last: expect.any(Function),
      map: expect.any(Function),
      mapIndexed: expect.any(Function),
      memoize: expect.any(Function),
      memoizeWith: expect.any(Function),

      // NOTE BRN: This is commented out because it causes an extremely long diff to happen in Jest
      // nodeTypes: expect.any(Object),
      nAry: expect.any(Function),
      over: expect.any(Function),
      pick: expect.any(Function),
      prop: expect.any(Function),
      reduce: expect.any(Function),
      reduceIndexed: expect.any(Function),
      reduceObjIndexed: expect.any(Function),

      // NOTE BRN: This is commented out because it causes an extremely long diff to happen in Jest
      // root: expect.any(Object),
      set: expect.any(Function),
      slice: expect.any(Function),
      split: expect.any(Function),
      stringToPath: expect.any(Function)
    })
  })

  test('has error methods', () => {
    const mod = require('./')
    expect(mod).toMatchObject({
      createException: expect.any(Function),
      error: expect.any(Function),
      generateStackTrace: expect.any(Function),
      throwable: expect.any(Function)
    })
  })

  test('has fs methods', () => {
    const mod = require('./')
    expect(mod).toMatchObject({
      copyDirContentsSync: expect.any(Function),
      dirExists: expect.any(Function),
      fileExists: expect.any(Function),
      getTmpDir: expect.any(Function),
      isJsonPath: expect.any(Function),
      isYamlPath: expect.any(Function),
      packDir: expect.any(Function),
      parseFile: expect.any(Function),
      pathExists: expect.any(Function),
      readFile: expect.any(Function),
      readFileIfExists: expect.any(Function),
      removeFile: expect.any(Function),
      walkDirSync: expect.any(Function),
      writeFile: expect.any(Function)
    })
  })

  test('has lang methods', () => {
    const mod = require('./')
    expect(mod).toMatchObject({
      mix: expect.any(Function)
    })
  })

  test('has path methods', () => {
    const mod = require('./')
    expect(mod).toMatchObject({
      findPath: expect.any(Function)
    })
  })
})