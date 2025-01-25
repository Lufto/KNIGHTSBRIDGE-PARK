import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/TConfig'

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name][hash][ext]',
        },
    }

    const svgLoader = {
        test: /\.svg$/,
        oneOf: [
            {
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                type: 'asset/resource',
                generator: {
                    filename: 'assets/icons/[name][hash][ext]',
                },
            },
        ],
    };

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: { 
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const babelLoader =  {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    "i18next-extract",
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }
                ]
            ]
          }
        }
      }

	return [
        fileLoader,
        svgLoader,
        babelLoader,
		typescriptLoader,
		styleLoader,
	]
}