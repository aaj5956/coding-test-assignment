import { resolve } from 'path';

const cwd = process.cwd();
export const src = resolve(cwd, 'src');
export const build = resolve(cwd, 'dist');
export const publicDir = resolve(cwd, 'public');
