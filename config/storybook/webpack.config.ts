import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSVGLoader } from "../build/loaders/buildSVGLoader";
import { RuleSetRule } from "webpack";

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
    })

    return {
      ...updatedConfig,
      resolve: {
        ...updatedConfig.resolve,
        modules: [...(updatedConfig.resolve?.modules || []), paths.src],
        extensions: [...(updatedConfig.resolve?.extensions || []), '.ts', '.tsx'],
        alias: {
          ...updatedConfig.resolve?.alias,
          '@': paths.src,
        },
      },
      module: {
        ...updatedConfig.module,
        rules: [...(updatedConfig.module?.rules || []), buildSVGLoader(), buildCssLoader(true)],
      },
    };
})