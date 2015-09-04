var fs = require('fs');

function spit(path, encoding, cb) {
	fs.readFile(path, {encoding: encoding}, function (err, contents) {
		if (err)
			throw err;
		
		fs.unlink(path, function (err) {
			if (err)
				throw err;
			
			try {
				cb(null, contents.toString());
			} catch (err) {
				cb(err);
			}
		});
	});
}

module.exports = spit;