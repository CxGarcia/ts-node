/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import chalk from 'chalk'

export const log = (fn: Function) => {
  return (...args: unknown[]) => _log(args, fn(args))
}

const _log = (...logs: unknown[]) => {
  console.log('\n', `🚀  ${chalk.cyanBright(logs.join('  \u2794  '))}`, '\n')
}
