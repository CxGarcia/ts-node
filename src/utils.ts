/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import chalk from 'chalk'

export const logger = <T extends (...args: any[]) => ReturnType<T>>(fn: T) => {
  return (...args: Parameters<T>) =>
    _logger(args.map((val) => serialize(val)).join(', '), fn(...args))
}

const _logger = (args: string, returnVal: unknown) => {
  console.log(
    '\n',
    '🚀',
    chalk.cyanBright(`(${args})`, ' \u2794 ', serialize(returnVal)),
    '\n'
  )
}

const serialize = (args: unknown | unknown[]) => {
  return JSON.stringify(args)
}
