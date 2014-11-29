'use strict';
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var react = require('react-tools');

module.exports = function (opts) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-react', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(react.transform(file.contents.toString(), opts));
			file.path = gutil.replaceExtension(file.path, '.js');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-react', err, {
				fileName: file.path
			}));
		}

		cb();
	});
};
