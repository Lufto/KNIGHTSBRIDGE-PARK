import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoader } from './buildLoader'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/TConfig'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths, mode, isDev} = options

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			chunkFilename: 'js/[name].[contenthash].js',
			clean: true,
		},
		optimization: {
			usedExports: true,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          default: {
            minChunks: 1,
            priority: 5,
            reuseExistingChunk: true, 
          },
        },
      },
    },
		plugins: buildPlugins(options),
		module: {
			rules: buildLoader(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}