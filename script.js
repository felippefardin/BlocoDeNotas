document.getElementById('saveNote').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const day = document.getElementById('day').value;
    const note = document.getElementById('note').value;

    if (date && day && note) {
        // Obter as notas salvas no localStorage
        let notes = JSON.parse(localStorage.getItem('notes')) || [];

        // Adicionar a nova nota
        const newNote = {
            id: Date.now(),  // Utiliza timestamp como ID único
            date: date,
            day: day,
            note: note
        };
        notes.push(newNote);

        // Salvar as notas de volta no localStorage
        localStorage.setItem('notes', JSON.stringify(notes));

        document.getElementById('message').innerText = "Nota salva com sucesso!";
        loadNotes();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

function loadNotes() {
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';

    // Carregar as notas salvas
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <div class="date-day">${note.date} - ${note.day}</div>
            <p>${note.note}</p>
            <span class="edit" onclick="editNote(${note.id})">Editar</span>
            <span class="delete" onclick="deleteNote(${note.id})">Excluir</span>
        `;
        notesContainer.appendChild(noteElement);
    });
}

function editNote(id) {
    alert('Editar nota com ID: ' + id);
    
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.id !== id);
    
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
}


window.onload = loadNotes;
