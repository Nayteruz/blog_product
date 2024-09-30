import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? "inline-source-map" : undefined,
    resolve: buildResolvers(options),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
