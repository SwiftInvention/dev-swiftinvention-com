export const getStackImageAltFromSrc = (src: string) =>
  src.slice(src.indexOf('stack/') + 'stack/'.length, src.indexOf('.')) +
  ' logo';
