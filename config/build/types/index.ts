import { Configuration } from "webpack"

export type BuildMode = Configuration['mode']

export interface BuildEnv {
  mode: BuildMode,
  port: number
}

export interface BuildPaths {
  entry: string
  output: string
  html: string
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: number
}