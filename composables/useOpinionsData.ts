type Opinion = {
    name: string;
    text: string;
    path: string;
  };

  export default function useMenuData(): { opinions: Opinion[] } {
    const opinions: Opinion[] = [
      {
        name: "Adam Jarosz",
        text: "Pan Doktor Furman jest najlepszym dentystą! Chodzę już od 7-miu lat a Córki od 5-ciu lat. Pan Doktor zawsze profesjonalnie załatwi sprawę. Naprawdę jest lekarzem z powołaniem! Mamy 100% zaufania! Z całego Serca Polecam!",
        path: "/"
      },
      {
        name: "Iwona Skotnicka",
        text: "Leczenie zębów mlecznych oraz stałych ze względu na młody wiek pacjentów. Indywidualne podejście do każdego dziecka oraz wizyty adaptacyjne to nasza specjalność!",
        path: "/"
      },
      {
        name: "Michał Dudek",
        text: "Oferujemy dwie metody wybielania czyli leczenia przebarwień - nakładkową oraz lampą bejond.",
        path: "/"
      },
      {
        name: "Rafał Brzózka",
        text: "Oferujemy dwie metody wybielania czyli leczenia przebarwień - nakładkową oraz lampą bejond.",
        path: "/"
      },
      {
        name: "Tomasz Niesiołowski",
        text: "Oferujemy dwie metody wybielania czyli leczenia przebarwień - nakładkową oraz lampą bejond.",
        path: "/"
      },

    ];

    return { opinions };
  }