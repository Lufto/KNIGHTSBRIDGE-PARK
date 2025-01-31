import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/TConfig'

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({ template:  paths.html}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS__DEV__: JSON.stringify(isDev),
		}),
		new Dotenv()
	]

	if(isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin())
		plugins.push(new ReactRefreshWebpackPlugin())
	}

	return plugins
}