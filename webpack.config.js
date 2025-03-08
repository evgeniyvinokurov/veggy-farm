const path = require('path');

module.exports = {
	mode: 'development',
	entry: './assets/shop-src/index.js',
	output: {
	    path: path.resolve(__dirname, 'static'),
	    filename: 'shop-all.js'
	}
};
