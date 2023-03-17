export default{
    jsc: {
      target: "es2015",
      parser: {
        syntax: 'ecmascript',
        dynamicImport: true,
      },
       // or whichever version you need to support
    },

    transform: {
      legacyDecorator: true,
      react: {
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        throwIfNamespace: true,
        development: true,
        useBuiltins: true,
      },
    },
  };