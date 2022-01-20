import chalk from 'chalk'

export const log = (msg: unknown) => {
  console.log('\n', `🚀  ${chalk.cyanBright(msg)}`, '\n')
}
