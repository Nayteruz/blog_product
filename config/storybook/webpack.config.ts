import path from 'path';
import { RuleSetRule, DefinePlugin } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

export const webpackConfig = ((config) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  const updatedConfig = { ...config };
  updatedConfig.module = updatedConfig.module || {};
  updatedConfig.module.rules = updatedConfig.module.rules || [];
  updatedConfig.module.rules = updatedConfig.module.rules.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && /css/.test(rule.test.source)) {
      return false;
    }

    if (rule.test instanceof RegExp && /svg/.test(rule.test.source)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  return {
    ...updatedConfig,
    resolve: {
      ...updatedConfig.resolve,
      modules: [paths.src, ...(updatedConfig.resolve?.modules || [])],
      extensions: [...(updatedConfig.resolve?.extensions || []), '.ts', '.tsx'],
      alias: {
        '@': paths.src,
        ...updatedConfig.resolve?.alias,
      },
    },
    module: {
      ...updatedConfig.module,
      rules: [...(updatedConfig.module?.rules || []), buildSVGLoader(), buildCssLoader(true)],
    },
    plugins: [...(updatedConfig.plugins || []), new DefinePlugin({
      __IS_DEV__: true,
    })],
  };
});
