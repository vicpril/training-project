import { Configuration } from 'webpack'

export type BuildMode = Configuration['mode']

export interface BuildEnv {
  mode: BuildMode,
  port: number,
  apiUrl: string
}

export interface BuildPaths {
  entry: string
  output: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: number,
  apiUrl: string
}
