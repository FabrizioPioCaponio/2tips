// Importa il modulo mongoose per interagire con MongoDB
import mongoose from 'mongoose';

// Variabile per tenere traccia dello stato della connessione
let isConnected = false; // true se connessi, false altrimenti

// Funzione asincrona per connettersi al database MongoDB
export const connectToDB = async () => {
  // Imposta l'opzione 'strictQuery' di mongoose su true per considerare le query sconosciute come non valide
  mongoose.set('strictQuery', true);

  // Controlla se siamo già connessi al database
  if (isConnected) {
    console.log('MongoDB è già connesso');
    return;
  }

  try {
    // Tentativo di connessione al database utilizzando l'URL fornito come variabile d'ambiente 'MONGODB_URI'
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt", // Specifica il nome del database da utilizzare
      useNewUrlParser: true, // Imposta l'opzione per utilizzare il nuovo parser di URL
      useUnifiedTopology: true, // Imposta l'opzione per utilizzare il nuovo motore di monitoraggio del server
    });

    // Se la connessione è riuscita, impostiamo la variabile 'isConnected' su true
    isConnected = true;

    // Stampiamo un messaggio di log per indicare che la connessione al database è avvenuta con successo
    console.log('MongoDB connesso')
  } catch (error) {
    // Se la connessione fallisce, catturiamo l'errore e stampiamo un messaggio di log con il dettaglio dell'errore
    console.log(error);
  }
}
