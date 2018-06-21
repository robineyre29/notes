console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log(argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note added');
	} else {
		console.log('Duplicate Note');
	}

} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.printNote();
} else if  (command === 'remove') {
	notes.deleteNote();
} else {
	console.log('Command not recognised');
}



