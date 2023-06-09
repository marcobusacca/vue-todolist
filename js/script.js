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
                    text : 'Fare la spesa 1',
                    done : false
                },

                {
                    text : 'Fare la spesa 2',
                    done : false
                },

                {
                    text : 'Fare la spesa 3',
                    done : false
                },

                {
                    text : 'Fare la spesa 4',
                    done : false
                },

                {
                    text : 'Fare la spesa 5',
                    done : false
                },

                {
                    text : 'Fare la spesa 6',
                    done : false
                },
            ],

            newTask : '',
        }
    },
    // FUNZIONE METHODS
    methods:{

    }
}).mount('#app'); // COLLEGO L'APP VUE.JS AL DOM HTML