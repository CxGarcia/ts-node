import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  rootDir: '.',
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/?!(chalk)'],

  transform: {
    '\\.ts$': 'ts-jest',
    '\\.js$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.ts']
}

export default config
