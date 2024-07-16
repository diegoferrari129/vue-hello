// salvo in una variabile la funzione per utilizzare vue
const {createApp} = Vue;
//invoco la funzione per inizializzare l'instanza di vue
createApp ({
    data() {
        return {
            // definisco il messaggio che verrà mostrato nel rispettivo tag html
            message: "Welcome Vue"
        }
    }
// invoco il metodo per connettere l'instanza al tag html
}).mount('#welcome');