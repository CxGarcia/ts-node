import { logger } from './utils'

export const _fn = (str: string) => {
  return str
}

const fn = logger(_fn)

fn('xxx')
