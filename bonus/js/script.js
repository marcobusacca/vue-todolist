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
                    text : 'Task 1',
                    done : false
                },

                {
                    text : 'Task 2',
                    done : false
                },

                {
                    text : 'Task 3',
                    done : false
                },

                {
                    text : 'Task 4',
                    done : false
                },

                {
                    text : 'Task 5',
                    done : false
                },
            ],

            newTask : '',
        }
    },
    // FUNZIONE METHODS
    methods:{

        // QUANDO L'UTENTE CLICCA SUL "CHECKED BUTTON", ASSEGNO ALL'ATTRIBUTO DONE DELL'ELEMENTO CLICCATO IL SUO OPPOSTO
        changeTaskDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },

        // QUANDO L'UTENTE CLICCA SUL "DELETE BUTTON", CANCELLO DALL'ARRAY "TASKS" L'OGGETTO CON L'INDICE CLICCATO
        deleteTask(index){
            this.tasks.splice(index, 1)
        },

        // QUANDO L'UTENTE CLICCA SULL' "ADD BUTTON", AGGIUNGO ALL'ARRAY "TASKS" IL NUOVO OGGETTO
        addTask(){
            // CONTROLLO CHE L'UTENTE NON ABBIA LASCIATO IL TESTO VUOTO
            if (this.newTask !== ''){
                // DICHIARO LA VARIABILE CONTENENTE IL NUOVO OGGETTO
                let object = {
                    text : this.newTask,
                    done : false
                };

                // PUSHO DENTRO L'ARRAY "TASKS" IL NUOVO OGGETTO
                this.tasks.push(object);

                // RESETTO LA VARIABILE NEW_TASK
                this.newTask = '';
            }
        }
    }
}).mount('#app'); // COLLEGO L'APP VUE.JS AL DOM HTML