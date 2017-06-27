const fs = require('fs');

function CloseCard (text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.clozeHidden = this.text.replace(this.cloze, '_______');
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
