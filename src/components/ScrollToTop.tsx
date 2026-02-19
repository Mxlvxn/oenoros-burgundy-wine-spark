import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // On force le retour en haut de la fenêtre à chaque changement d'URL
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne visuel rien, il agit juste en arrière-plan
};

export default ScrollToTop;
