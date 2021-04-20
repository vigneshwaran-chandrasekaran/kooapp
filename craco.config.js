const CracoLessPlugin = require('craco-less');

/**
 * To override default antd design styles with custom styles.
 * here we are modifying webpack configuration with craco-less plugin.
 */

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#fbd051',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
