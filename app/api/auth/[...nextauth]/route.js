// Importa i moduli necessari
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Importa il modello User e la funzione connectToDB da utils/database
import User from '@models/user';
import { connectToDB } from '@utils/database';

// Configura NextAuth con il provider Google
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID, // Chiave del cliente Google fornita come variabile d'ambiente
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Segreto del cliente Google fornito come variabile d'ambiente
    })
  ],
  callbacks: {
    // Funzione per gestire la sessione utente
    async session({ session }) {
      // Memorizza l'id dell'utente da MongoDB nella sessione
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    // Funzione per gestire il processo di accesso (signIn)
    async signIn({ account, profile, user, credentials }) {
      try {
        // Connessione al database MongoDB
        await connectToDB();

        // Verifica se l'utente esiste già nel database
        const userExists = await User.findOne({ email: profile.email });

        // Se l'utente non esiste, crea un nuovo documento e salva l'utente in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        // Restituisce "true" per indicare che l'accesso è riuscito
        return true;
      } catch (error) {
        // Se si verifica un errore, stampa un messaggio di log con il dettaglio dell'errore
        console.log("Errore durante la verifica dell'esistenza dell'utente: ", error.message);
        // Restituisce "false" per indicare che l'accesso non è riuscito
        return false;
      }
    },
  }
});

// Esporta i gestori GET e POST
export { handler as GET, handler as POST };
