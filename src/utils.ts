/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import chalk from 'chalk'

export const logger = <T extends (...args: any[]) => ReturnType<T>>(fn: T) => {
  return (...args: Parameters<T>) => _logger(cloneArgs(...args), fn(...args))
}

const _logger = (args: unknown[], returnVal: unknown) => {
  console.log(
    '\n',
    '🚀',
    chalk.cyanBright(
      `(${args.map((val) => JSON.stringify(val)).join(', ')})`,
      ' \u2794 ',
      JSON.stringify(returnVal)
    ),
    '\n'
  )
}

const cloneArgs = (...args: unknown[]) => {
  return args.map(deepClone)
}

const deepClone = <T>(val: T): T => {
  switch (true) {
    case val === null:
    case val === undefined:
    case typeof val === 'number':
    case typeof val === 'string':
      return val
    case Array.isArray(val):
      return (val as unknown as unknown[]).map(deepClone) as unknown as T
    case typeof val === 'object':
      // eslint-disable-next-line no-case-declarations
      const obj = { ...val }
      for (const key in val) {
        obj[key] = deepClone(val[key])
      }
      return obj as T
    default:
      return val
  }
}
