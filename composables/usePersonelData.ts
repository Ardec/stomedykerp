type Person = {
  name: string;
  job: string;
  path: string;
};

export default function useMenuData(): { persons: Person[] } {
  const persons: Person[] = [
    {
      name: "Maciej Piotrowski",
      job: "Prezes zarządu",
      path: "assets/placeholder.webp"
    },
    {
      name: "Violetta Kwiecień",
      job: "Właściciel",
      path: "assets/placeholder.webp"
    },
    {
      name: "Aleksandra Domańska",
      job: "Lekarz",
      path: "assets/a_domanska.webp"
    },
    {
      name: "Firas Abozid",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Ewa Ryszka",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Karolina Sroka",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Krzysztof Furman",
      job: "Lekarz",
      path: "assets/k_furman.webp"
    },
    {
      name: "Magdalena Fatyga",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Martyna Szychlińska",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Natasza Furman",
      job: "Lekarz",
      path: "assets/n_furman.webp"
    },
    {
      name: "Piotr Stępień",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Viktoriia Pankevych",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Kamila Adamczyk",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Konrad Kazanecki",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Stepan Yasnyskyy",
      job: "Lekarz",
      path: "assets/placeholder.webp"
    },
    {
      name: "Karolina Meus",
      job: "Asysta",
      path: "assets/k_meus.webp"
    },
    {
      name: "Elżbieta Skotnicka",
      job: "Asysta",
      path: "assets/e_skotnicka.webp"
    },
    {
      name: "Małgorzata Pancerz",
      job: "Asysta",
      path: "assets/placeholder.webp"
    },
    {
      name: "Patrycja Oracz",
      job: "Asysta",
      path: "assets/placeholder.webp"
    },
    {
      name: "Grażyna Zyguła",
      job: "Asysta",
      path: "assets/placeholder.webp"
    },
    {
      name: "Tatiana Zinkevich",
      job: "Asysta",
      path: "assets/placeholder.webp"
    },
    {
      name: "Amelia Sirko",
      job: "Recepcja",
      path: "assets/placeholder.webp"
    },
    {
      name: "Emilia Nawara",
      job: "Recepcja",
      path: "assets/placeholder.webp"
    },
    {
      name: "Nikola Zając",
      job: "Recepcja",
      path: "assets/placeholder.webp"
    },

  ];

  return { persons };
}