import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const svgLoader = buildSVGLoader();

  const fileLoader = buildFileLoader();

  const cssLoader = buildCssLoader(isDev);

  const babelLoader = buildBabelLoader(isDev);

  // если не используем typepscript, то нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
