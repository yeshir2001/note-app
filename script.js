document.addEventListener('DOMContentLoaded', function() {
    const noteText = document.getElementById('note-text');
    const addButton = document.getElementById('add-button');
    const notesList = document.getElementById('notes-list');

    addButton.addEventListener('click', function() {
        const note = noteText.value.trim();
        if (note) {
            addNote(note);
            noteText.value = ''; // Clear input after adding
        }
    });

    function addNote(note) {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');
        noteItem.textContent = note;
        notesList.appendChild(noteItem);
    }
});
