import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

require('dotenv').config();

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function(config, env, helpers) {
  const { webpack } = helpers;

  // ignore locale in moment.js
  config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
  config.plugins.push(new LodashModuleReplacementPlugin());

  // inject env vars through DefinePlugin
  const [{ plugin: definePlugin }] = helpers.getPluginsByName(config, 'DefinePlugin');
  definePlugin.definitions['process.env.FIREBASE_API_KEY'] = `"${process.env.FIREBASE_API_KEY}"`;

  const isProd = process.env.NODE_ENV === 'production';
  const dbPrefix = isProd ? 'powerData' : 'dev-powerData';
  definePlugin.definitions['process.env.FIREBASE_DB_PREFIX'] = `"${dbPrefix}"`;

  // add lodash webpack plugin
  const { rule: babelLoader } = helpers.getLoadersByName(config, 'babel-loader')[0];
  const babelConfig = babelLoader.options;
  babelConfig.plugins.push('lodash');
}
