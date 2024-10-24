import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    commaDangle: 'only-multiline',
  },
  typescript: true,
  vue: true,
  unocss: true,
}, {
  files: ['**/*.{js,jsx,ts,tsx,vue}'],
  rules: {
    'no-console': 'off',
  },
})
