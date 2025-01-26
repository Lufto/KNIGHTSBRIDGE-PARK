import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/TConfig'

export default (env:BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src')
  }
  
  const mode = env.mode || 'production'
  const isDev = mode === 'development'
  
  const PORT = env.port || 3000
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
  
  
  return config
}