const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities }) => {
  const f = (v) =>
    `clamp(${(v * 2 / 3).toFixed(2)}px, ${(v / 1920 * 100).toFixed(4)}vw, ${v}px)`

  const map = {
    fw: 'width',
    fh: 'height',
    fmw: 'maxWidth',
    ffs: 'fontSize',
    flh: 'lineHeight',
    fp: 'padding',
    fpy: 'paddingBlock',
    fpx: 'paddingInline',
    fpl: 'paddingLeft',
    fpr: 'paddingRight',
    fpt: 'paddingTop',
    fpb: 'paddingBottom',
    fm: 'margin',
    fmt: 'marginTop',
    fmb: 'marginBottom',
    fml: 'marginLeft',
    fmr: 'marginRight',
    fgap: 'gap',
    frounded: 'borderRadius',
    ftop: 'top',
    fleft: 'left',
  }

  Object.entries(map).forEach(([name, prop]) => {
    matchUtilities({
      [name]: (v) => ({ [prop]: f(parseFloat(v)) }),
    })
  })
})