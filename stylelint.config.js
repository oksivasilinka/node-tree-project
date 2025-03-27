const config = {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin', 'forward'],
      },
    ],
    'scss/at-rule-no-unknown': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'no-duplicate-selectors': true,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
  },
}

export default config
