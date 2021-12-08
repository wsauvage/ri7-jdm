
//Définiton des variables globales
var board = document.getElementById('board');
var new_game_button = document.getElementById('new_game_button');

new_game_button.addEventListener('click', (e) => {
    new_game();
});

var new_game = () => {
    let nb_row = document.getElementById('nb_row').value;
    let nb_col = document.getElementById('nb_col').value;

    let size = nb_row * nb_col;

    if (size % 2 !== 0) {
        alert('Le nombre de cases n\'est pas paire !');
    }
    else {
        make_board(nb_row, nb_col);
    }
};

var range = (start, end) => {
    var ary = [];
    for (let i = start; i <= end; i++) {
        ary.push(i);
        ary.push(i);
    }
    return ary;
}

var make_board = (nb_row, nb_col) => {
    board.innerHTML = '';

    let cells = range(1, (nb_row * nb_col / 2));

    console.log(cells);

    cells = cells.sort((a, b) => 0.5 - Math.random());

    console.log(cells);

    let index = 0;
    for (let i = 0; i < nb_row; i++) {
        const tr_element = document.createElement('tr');
        for (let j = 0; j < nb_col; j++) {

            //Construction des éléments de la grille
            const td_element = document.createElement('td');
            td_element.className = 'cell';
            const cell_number = cells[index];

            const img_element = document.createElement('img');
            img_element.src = `assets/img/${cell_number}.jpg`;
            td_element.appendChild(img_element);

            //td_element.innerHTML = cell_number;
            td_element.setAttribute('data-cell-number', cell_number);

            //On ajoute un event listener sur chaque cellule pour lancer un tour de jeu à chaque click du joueur
            td_element.addEventListener('click', (e) => {
                let cn = e.currentTarget.getAttribute('data-cell-number');
                console.log(cn);
            });

            //Initialisation du tableau des valeurs de "coups joués"
            tr_element.appendChild(td_element);
            index++;
        }
        board.appendChild(tr_element);
    }
};
