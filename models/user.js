// Importa il modulo Schema, model e models da mongoose
import { Schema, model, models } from 'mongoose';

// Definizione dello schema per il modello "User"
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'], // Garantisce che l'email sia unica nel database
    required: [true, 'Email is required!'], // Richiede un valore per l'email
  },
  username: {
    type: String,
    required: [true, 'Username is required!'], // Richiede un valore per lo username
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"] // Utilizza una regex per verificare la validità dello username
  },
  image: {
    type: String, // Il campo "image" contiene una stringa rappresentante l'URL dell'immagine dell'utente
  }
});

// Definizione del modello "User" utilizzando lo schema UserSchema
// La riga seguente controlla se il modello è già stato definito in Mongoose
// Se è già stato definito (ad esempio, in una richiesta di hot-reloading in ambiente di sviluppo),
// allora riutilizza il modello esistente; altrimenti, crea un nuovo modello.
const User = models.User || model("User", UserSchema);

// Esporta il modello "User"
export default User;
