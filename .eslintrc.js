module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	env: {
		es6: true,
		browser: true,
		jest: true,
		node: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'react/display-name': [ 'off' ],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [ 'error', { extensions: [ '.ts', '.tsx' ] } ],
		'react/prop-types': 'error',
		indent: [ 'error', 'tab' ],
		'no-tabs': [ 'error', { allowIndentationTabs: true } ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always' ],
		quotes: [ 'error', 'single' ],
		'comma-dangle': [ 'error', 'never' ],
		semi: [ 'error', 'always' ],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: [ 'all', 'single', 'multiple', 'none' ],
				allowSeparatedGroups: true
			}
		],
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_'
			}
		],
		'no-console': [
			'error',
			{
				allow: [ 'warn', 'error' ]
			}
		]
	}
};
