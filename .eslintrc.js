module.exports = {
  root: true,
  env: {
    node: true,
    // The Follow config only works with eslint-plugin-vue v8.0.0+
    "vue/setup-compiler-macros": true,
  },
  plugins: [
    'html',
    'vue'	
  ],
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names':'off',
    "quotes": [0, "single"],	// 禁用引号检查	引号类型 `` "" ''
		"semi": 0,  				// 禁用分号检查	[1, "always"]: 需要分号, [2, "never"]: 不加分号, 0: 禁用此项
		"vue/html-self-closing": "off",
		"vue/no-parsing-error": [2, {
		"x-invalid-end-tag": true,
		}]
  }
}
