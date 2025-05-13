import { useState } from "react";

/**
 * Permet de fetch une URL et gérer un état de chargement
 * @returns 
 */
export function useFetch() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Fonction fetch
    const fetchData = async (url, options = {}) => {

        setLoading(true); // Début du chargement
        setError(null); // Pas d'erreur
        try {
            const response = await fetch(url, options); //Requête

            //En cas d'erreur HTTP
            if (!response.ok) {
                return { success: false, data: null, error: `Erreur ${response.status}` };
            }
            const data = await response.json();
            return { success: true, data: data, error: null }; //Retourne la réponse 

        } catch (err) {
            return { success: false, data: null, error: err.message || "Erreur inconnue" };
        } finally {
            setLoading(false); //Termine toujours pas terminer le chargement
        }
    };

    return { fetchData, loading, error };
}
