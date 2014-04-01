
var Evernote = require('evernote').Evernote;

module.exports = function(
  token,
  noteTitle,
  noteBody,
  isReminder,
  callback
) {

  var client = new Evernote.Client({token: token, sandbox: false});
  var noteStore = client.getNoteStore();

  console.log(noteStore);
 
  var nBody = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  nBody += "<!DOCTYPE en-note SYSTEM \"http://xml.evernote.com/pub/enml2.dtd\">";
  nBody += "<en-note>" + noteBody + "</en-note>";
 
  // Create note object
  var ourNote = new Evernote.Note();
  ourNote.title = noteTitle;
  ourNote.content = nBody;
  ourNote.attributes = new Evernote.NoteAttributes();
  if (isReminder) {
    ourNote.attributes.reminderOrder = 0;
  }
 
  // Attempt to create note in Evernote account
  noteStore.createNote(ourNote, function(err, note) {
    callback(err, note);
  });
};
