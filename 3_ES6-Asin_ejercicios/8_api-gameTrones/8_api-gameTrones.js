const select = document.getElementById('character-list');
const img = document.querySelector('.character-image');

// Traigo datos
fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(characters => {
        console.log('Personajes cargados:', characters);
        characters.forEach(character => {
            const option = document.createElement('option');
            option.value = character.imageUrl;
            option.textContent = character.fullName || character.firstName || 'Sin nombre';
            select.appendChild(option);
        });

        // Evento 
        select.addEventListener('change', () => {
            img.src = select.value;
            img.style.display = 'block';
        });
    });

    