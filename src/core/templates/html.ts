/*
 * @Author: saber2pr
 * @Date: 2019-06-12 09:44:30
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-12 09:47:12
 */
export interface InjectContent {
  injectHead?: string
  injectBody?: string
}

export const templateContent = (
  title: string = '',
  { injectHead = '', injectBody = '' }: InjectContent = {
    injectBody: '',
    injectHead: ''
  }
) =>
  `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge">${injectHead}<title>${title}</title></head><body>${injectBody}</body></html>`
