const illegalRe = /[/?<>\\:*|"]/g
// eslint-disable-next-line no-control-regex
const controlRe = /[\x00-\x1f\x80-\x9f]/g
const reservedRe = /^\.+$/
const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i
const windowsTrailingRe = /[. ]+$/
const punctions1 = /[\u0020-\u002f]/g
const punctions2 = /[\u003a-\u0040]/g
const punctions3 = /[\u005b-\u005e]/g
const punctions4 = /[\u0060]/g
const punctions5 = /[\u007b]/g
const punctions6 = /[\u00a0-\u3000]/g

export const sanitize = (input: string, replacement: string = '') => {
  console.log({ input })
  const extension = input.split('.').pop() ?? 'none'
  const sanitized = removeExtension(input)
    .normalize('NFD')
    .replace(illegalRe, replacement)
    .replace(controlRe, replacement)
    .replace(reservedRe, replacement)
    .replace(windowsReservedRe, replacement)
    .replace(windowsTrailingRe, replacement)
    .replace(/ /g, replacement)
    .replace(punctions1, replacement)
    .replace(punctions2, replacement)
    .replace(punctions3, replacement)
    .replace(punctions4, replacement)
    .replace(punctions5, replacement)
    .replace(punctions6, replacement)

  if (sanitized.length === 0) return 'dataja'
  return `${sanitized}.${extension}`
}

export const removeExtension = (input: string): string => input.split('.').slice(0, -1).join('')
