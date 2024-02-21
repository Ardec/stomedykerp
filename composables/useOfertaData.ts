type Category = {
    name: string;
    text: string;
    path: string;
  };

  export default function useMenuData(): { categories: Category[] } {
    const categories: Category[] = [
      {
        name: "Stomatologia zachowawcza",
        text: "Przeprowadzamy kompleksowe badanie jamy ustnej poprzedzone wywiadem oraz diagnostyką RTG. Wykonujemy wypełnienia światłoutwardzalnym materiałem kompozytowym, dbając przede wszystkim o estetykę uzębienia.",
        path: "/assets/stomatologia_zachowawcza.webp"
      },
      {
        name: "Stomatologia dziecięca",
        text: "Leczenie zębów mlecznych oraz stałych ze względu na młody wiek pacjentów. Indywidualne podejście do każdego dziecka oraz wizyty adaptacyjne to nasza specjalność!",
        path: "/assets/stomatologia_dziecieca.webp"
      },
      {
        name: "Wybielanie",
        text: "Oferujemy dwie metody wybielania czyli leczenia przebarwień - nakładkową oraz lampą bejond.",
        path: "/assets/wybielanie.webp"
      },
      {
        name: "Endodoncja",
        text: "Jest to leczenie kanałowe czyli dokładne mechaniczne opracowanie kanału zębowego, a następnie jego szczelne wypełnienie. Podczas zabiegu korzystamy z nowoczesnych technik i materiałów.",
        path: "/assets/endodoncja.webp"
      },
      {
        name: "Chirurgia stomatologiczna",
        text: "Podczas zabiegów chirurgicznych dbamy o to, by pacjent nie odczuwał bólu i czuł się bezpiecznie. Nasi specjaliści w tej dziedzinie stale podnoszą swoje kwalifikacje oraz kompetencje.",
        path: "/assets/chirurgia_stomatologiczna.webp"
      },
      {
        name: "Ortodoncja",
        text: "Leczeniem ortodontycznym obejmujemy pacjentów w każdym wieku. Korygujemy wady zgryzu oraz wszelkie nieprawidłowości zębowe. Oferujemy zarówno aparaty stałe jak i ruchome.",
        path: "/assets/ortodoncja.webp"
      },
      {
        name: "Protetyka",
        text: "Zajmujemy się uzupełnieniem brakujących zębów oraz odbudową straconych tkanek uzębienia. Leczymy bruksizm oraz zaburzenia w stawie skroniowo-żuchwowym.",
        path: "/assets/protetyka.webp"
      },
      {
        name: "Implantologia",
        text: "Wszczepianie implantów czyli pełna rekonstrukcja uzębienia na najwyższym poziomie. Decydując się u nas na leczenie implantologiczne zyskujesz gwarancje na długotrwały efekt.",
        path: "/assets/implantologia.webp"
      },
    ];

    return { categories };
  }