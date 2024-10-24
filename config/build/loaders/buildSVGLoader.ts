import { RuleSetRule } from 'webpack';

export const buildSVGLoader = (): RuleSetRule => ({
  test: /\.svg$/,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
});
