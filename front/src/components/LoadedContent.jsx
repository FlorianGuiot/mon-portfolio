export default function LoadedContent ({loading, error, content}) {
    return (
        <div>
            {loading ? 
                (
                    // Spinner personnalisé avec Tailwind
                    <div className="flex flex-col justify-center items-center h-full">
                        <div className="w-24 h-24 border-8 border-t-8 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <p className="font-semibold pt-4">Chargement...</p>
                    </div>
                ) : error ? (
                    <p>Une erreur est survenue : {error}</p> // Si une erreur se produit
                ) : (
                    <div>{content}</div> // Affiche le contenu chargé
                )
            }
        </div>
    )
}