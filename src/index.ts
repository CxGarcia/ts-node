import { log } from './utils'

export const _fn = () => {
  return false
}

const fn = log(_fn)

fn(2)
fn(2)
fn(2)
