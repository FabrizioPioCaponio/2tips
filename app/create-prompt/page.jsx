"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
    // Utilizza la funzione useSession() fornita da next-auth per ottenere la sessione utente
    const { data: session } = useSession();
  
    // Utilizza 'next/router' per ottenere l'oggetto router
    const router = useRouter();
  
    // Stati locali per gestire lo stato del form
    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "" });
  
    // Funzione per la creazione del prompt
    const createPrompt = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        // Effettua una richiesta POST all'endpoint '/api/prompt/new'
        const response = await fetch("/api/prompt/new", {
          method: "POST",
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id, // Utilizza l'id dell'utente dalla sessione
            tag: post.tag,
          }),
        });
  
        // Se la richiesta ha avuto successo, reindirizza l'utente alla homepage
        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
    };
  
    // Passa le props necessarie al componente 'Form' per visualizzare il form di creazione
    return (
      <Form
        type='Crea'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    );
  };
  
  // Esporta il componente CreatePrompt
  export default CreatePrompt;