module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,    
    env: {
      test: {
        presets,
        plugins,
      },
      production: {
        presets,
        plugins,
        comments: false,
      }
    },
  };
};
