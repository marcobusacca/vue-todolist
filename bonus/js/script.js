"use strict";

// RICHIAMO FUNZIONE CREATE_APP DA VUE.JS
const {createApp} = Vue;

// FUNZIONE CREATE_APP
createApp({
    // FUNZIONE DATA CON OGGETTO RETURN
    data(){
        return{
            // DEFINIZIONE VARIABILI VUE.JS

            appTitle            :   'Vue Toboolist',
            appContentTitle     :   'La mia todolist',

            // ARRAY TASKS CON OGGETTI TASK
            tasks : [
                {
                    text        : 'Task 1',
                    done        : false,
                    editEnabled : false
                },

                {
                    text        : 'Task 2',
                    done        : false,
                    editEnabled : false
                },

                {
                    text        : 'Task 3',
                    done        : false,
                    editEnabled : false
                },

                {
                    text        : 'Task 4',
                    done        : false,
                    editEnabled : false
                },

                {
                    text        : 'Task 5',
                    done        : false,
                    editEnabled : false
                },
            ],

            newTask : '',
        }
    },
    // FUNZIONE METHODS
    methods:{

        // QUANDO L'UTENTE CLICCA SUL "CHECKED BUTTON", ASSEGNO ALL'ATTRIBUTO DONE DELL'ELEMENTO CLICCATO IL SUO OPPOSTO
        changeTaskDone(index){
            // SE DONE è TRUE assegno FALSE, SE DONE è FALSE assegno TRUE
            this.tasks[index].done = !this.tasks[index].done;
        },

        // QUANDO L'UTENTE CLICCA SUL "DELETE BUTTON", CANCELLO DALL'ARRAY "TASKS" L'OGGETTO CON L'INDICE CLICCATO
        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        // QUANDO L'UTENTE CLICCA SULL' "ADD BUTTON", AGGIUNGO ALL'ARRAY "TASKS" IL NUOVO OGGETTO
        addTask(){
            // CONTROLLO CHE L'UTENTE NON ABBIA LASCIATO IL TESTO VUOTO
            if (this.newTask !== ''){
                // DICHIARO LA VARIABILE CONTENENTE IL NUOVO OGGETTO
                let object = {
                    text        : this.newTask,
                    done        : false,
                    editEnabled : false
                };

                // PUSHO DENTRO L'ARRAY "TASKS" IL NUOVO OGGETTO
                this.tasks.push(object);

                // RESETTO LA VARIABILE NEW_TASK
                this.newTask = '';
            }
        },

        // QUANDO L'UTENTE CLICCA SULL' "EDIT BUTTON", ASSEGNO ALL'ATTRIBUTO EDIT_ENABLED DELL'ELEMENTO CLICCATO IL SUO OPPOSTO
        editTask(index){
            // CONTROLLO CHE L'UTENTE NON ABBIA LASCIATO IL TESTO VUOTO
            if (this.tasks[index].text !== ''){
                // SE EDIT_ENABLED è TRUE assegno FALSE, SE EDIT_ENABLED è FALSE assegno TRUE
                this.tasks[index].editEnabled = !this.tasks[index].editEnabled;
            }
        }
    }
}).mount('#app'); // COLLEGO L'APP VUE.JS AL DOM HTML