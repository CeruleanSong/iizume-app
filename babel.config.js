module.exports = {
	presets: [ 'module:metro-react-native-babel-preset' ],
	plugins: [ 
		[
			'module-resolver',
			{
				root: [ './src' ],
				extensions: [ '.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json' ],
				alias: {
					'@config': './config',
					'@components': './src/ui/components',
					'@pages': './src/ui/pages',
					'@': './src'
				}
			}
		],
		'react-native-reanimated/plugin'
	]
};
