PROBLEMA:

Rifare l'esercizio della to do list visto a lezione: Creare un Array di Oggetti (con proprietà Text e Done) che rappresentano le Task e mostrarle a schermo;

Aggiungete poi le Funzionalità di Cambio dello Stato del Task (cambiate il valore di Done), Eliminazione di una Task ed Aggiunta di una Nuova Task.


SOLUZIONE:

- Creare la pagina HTML in modo Statico;

    - Creare il Container "app" per poi collegarlo a vue.js;

    - Usare BootStrap:

        - Creare il Container della Pagina HTML;

        - Creare una Row con dentro una Col-12 per il Titolo della Pagina;

        - Creare una Row con dentro una Col-12 per il Contenuto della Pagina;
    

- Creare il Boilerplate in JavaScript per Vue.js;


- Inserire dentro il Return le Variabili e l'Array di Oggetti:

    - Variabile " appTitle : '' " per il Titolo della Pagina;

    - Variabile " appContentTitle : '' " per il Titolo del Contenuto della Pagina;

    - Array di Oggetti (tasks) contenente le Task:

        - Ogni task ha proprietà = (text : '', done : false);

    - Variabile " newTask : '' " che conterrà il valore inserito dall'utente nell'input per aggiungere una nuova Task;


- Inserire tramite v-text la Variabile "appTitle" nel DOM HTML;

- Inserire tramite v-text la Variabile "appContentTitle" nel DOM HTML;


- Creare un DIV che viene mostrato a schermo SOLO SE la lunghezza dell'array "tasks" è UGUALE a 0 (v-if):

    - Inserire dentro il DIV un testo con scritto "Non ci sono Task";


- Usare v-for per stampare nel DOM HTML tutti gli "LI" in base a quante Task ci sono nell'array "tasks":

    - Usare v-text per inserire il testo (attributo : text) di ogni Task nel DOM HTML;

    - Usare il v-bind e l'operatore ternario per impostare la classe "task_done" SOLO SE l'attributo "done" è UGUALE a TRUE;


- Usare v-on:click sul "Checked Button" per Richiamare la Funzione = changeTaskDone(index):

    - Definire la Funzione changeTaskDone(index) in JavaScript;


- Usare v-on:click sul "Delete Button" per Richiamare la Funzione = deleteTask(index);

    - Definire la Funzione deleteTask(index) in JavaScript (usare la Funzione = splice(index, 1));


- Usare v-model sull'input di inserimento Nuova Task per monitare quello che scrive l'utente e salvarlo nella Variabile "newTask";

- Usare v-on:keyup.enter sull'input di inserimento Nuova Task per Richiamare la Funzione = addTask;


- Usare v-on:click sull'"Add Button" per Richiamare la Funzione = addTask:

    - Definire la Funzione addTask in JavaScript:

        - SE l'utente non ha inserito una stringa vuota, ALLORA:

            - creare un Nuovo Oggetto, con le proprietà text(newTask) e done(false);

            - Pushare il Nuovo Oggetto nell'Array "tasks";

            - Resettare la Variabile newTask.