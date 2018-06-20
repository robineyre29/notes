console.log("Starting notes.js");

var addNote = (title, body) => {
	console.log('Adding Note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

var printNote = () => {
	console.log('Reading individual note:');
};

var deleteNote = () => {
	console.log('Removing note');
};

module.exports = {
	addNote,
	getAll,
	printNote,
	deleteNote
};