const fs = require('fs');

function CloseCard (text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.clozePartial = cloze;
	this.clozeHidden = this.text.replace(this.clozeHidden, '________');
	// log an error if cloze hidden does not appear in input
	this.create = function() {
		var info = {
			text: this.text,
			cloze: this.cloze,
			clozeHidden: this.clozeHidden,
			type: "cloze"
		};
		fs. appendFile('log.txt', JSON.stringify(info) + ';', 'utf8', function(err) {
			if (err) {
				console.log(err);
			}
		});
	};
}

module.exports = ClozeCard;