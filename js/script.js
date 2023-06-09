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

                {
                    text : 'Task 6',
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
        }

    }
}).mount('#app'); // COLLEGO L'APP VUE.JS AL DOM HTML