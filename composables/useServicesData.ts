export default function useServicesData(): { services: Service[] } {
  const services: Service[] = [
    // PROFILAKTYKA
    {
      category: "Profilaktyka",
      name: "Scaling",
      value: "250 zł"
    },
    {
      category: "Profilaktyka",
      name: "Piaskowanie + polerowanie",
      value: "300 zł"
    },
    {
      category: "Profilaktyka",
      name: "Fluoryzacja",
      value: "150 zł"
    },
    {
      category: "Profilaktyka",
      name: "Lakowanie (jednego zęba, powyżej 8rż)",
      value: "100 zł"
    },
    // STOMATOLOGIA ZACHOWAWCZA
    {
      category: "Stomatologia Zachowawcza",
      name: "Konsultacja stomatologiczna (przy podjęciu leczenia w gabinecie wliczane w koszty)",
      value: "200 zł"
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Znieczulenie nasiękowe/przewodowe",
      value: "60/70 zł" // Uwaga: potrzebujesz osobnego wpisu dla 70 zł, jeśli to różne usługi
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Znieczulenie The Wand",
      value: "100 zł"
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Wypełnienie tymczasowe (opatrunek)",
      value: "180 zł"
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Wypełnienie kompozytowe",
      value: "od 250 zł" // Uwaga: 'od 250 zł' sugeruje zmienną cenę
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Wypełnienie chemoutwardzalne (Fuji)",
      value: "180 zł"
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Wkład z włókna szklanego + odbudowa",
      value: "500 zł"
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Wypełnienie w zębie mlecznym",
      value: "180 zł"
    },
    {
      category: "Stomatologia Zachowawcza",
      name: "Licówki z kompozytu w gabinecie",
      value: "od 300 zł" // Uwaga: 'od 300 zł' sugeruje zmienną cenę
    },
      // WYBIELANIE ZĘBÓW
      {
        category: "Wybielanie Zębów",
        name: "Wybielanie zębów lampą",
        value: "800 zł"
      },
      {
        category: "Wybielanie Zębów",
        name: "Wybielanie metodą nakładkową (2 łuki)",
        value: "950 zł"
      },
      {
        category: "Wybielanie Zębów",
        name: "Wybielanie zęba martwego - każda wizyta",
        value: "180 zł"
      },
      // ENDODONCJA
      {
        category: "Endodoncja",
        name: "Leczenie kanałowe (od jednego kanału)",
        value: "od 400 zł" // Uwaga: 'od 400 zł' sugeruje zmienną cenę
      },
      {
        category: "Endodoncja",
        name: "Opatrunek leczniczy",
        value: "180 zł"
      },
      {
        category: "Endodoncja",
        name: "Powtórne leczenie (re-endo) dodatkowo za każdy kanał",
        value: "100 zł"
      },

      {
        category: "Chirurgia",
        name: "Konsultacja chirurgiczna, protetyczna, implantologiczna",
        value: "200 zł"
      },
      {
        category: "Chirurgia",
        name: "Ekstrakcja zęba mlecznego",
        value: "160 zł"
      },
      {
        category: "Chirurgia",
        name: "Ekstrakcja zęba jednokorzeniowego",
        value: "250 zł"
      },
      {
        category: "Chirurgia",
        name: "Ekstrakcja zęba wielokorzeniowego",
        value: "350 zł"
      },
      {
        category: "Chirurgia",
        name: "Chirurgiczna ekstrakcja zęba z szyciem",
        value: "400 zł"
      },
      {
        category: "Chirurgia",
        name: "Chirurgiczna ekstrakcja zęba zatrzymanego",
        value: "650 zł"
      },
      {
        category: "Chirurgia",
        name: "Implant (część chirurgiczna)",
        value: "3000 zł"
      },
      {
        category: "Chirurgia",
        name: "Korona metalowa licowana porcelaną na implancie",
        value: "2000 zł"
      },
      {
        category: "Chirurgia",
        name: "Podniesienie zatoki metodą zamkniętą",
        value: "1800-2300 zł" // Uwaga: potrzebujesz obsługi dla zakresu cenowego 1800 - 2300 zł
      },
      {
        category: "Chirurgia",
        name: "Podniesienie zatoki metodą otwartą",
        value: "2800-3800 zł" // Uwaga: potrzebujesz obsługi dla zakresu cenowego 2800 - 3800 zł
      },
      {
        category: "Chirurgia",
        name: "Rekonstrukcja kości - ubytek mały / duży",
        value: "od 2000 zł" // Uwaga: 'od 2000 zł' sugeruje zmienną cenę
      },
      {
        category: "Protetyka",
        name: "Korona porcelanowa na metalu",
        value: "1200 zł"
      },
      {
        category: "Protetyka",
        name: "Korona pełnoceramiczna",
        value: "2000 zł"
      },
      {
        category: "Protetyka",
        name: "Wkład koronowo - korzeniowy",
        value: "450 zł"
      },
      {
        category: "Protetyka",
        name: "Wkład koronowo - korzeniowy składany",
        value: "500 zł"
      },
      {
        category: "Protetyka",
        name: "Inlay / Onlay kompozytowy",
        value: "600 zł"
      },
      {
        category: "Protetyka",
        name: "Proteza szkieletowa",
        value: "2500 zł"
      },
      {
        category: "Protetyka",
        name: "Proteza akrylowa",
        value: "1700 zł"
      },
      {
        category: "Protetyka",
        name: "Proteza akrylowa (1-3 punktów)",
        value: "900 zł"
      },
      {
        category: "Protetyka",
        name: "Proteza akrylowa (4-8 punktów)",
        value: "1000 zł"
      },
      {
        category: "Protetyka",
        name: "Proteza akrylowa całkowita",
        value: "1200 zł"
      },
      {
        category: "Protetyka",
        name: "Podniebienie bezbarwne",
        value: "300 zł"
      },
      {
        category: "Protetyka",
        name: "Siatka wzmacniająca",
        value: "350 zł"
      },
      {
        category: "Protetyka",
        name: "Podścielenie",
        value: "290 zł"
      },
      {
        category: "Protetyka",
        name: "Naprawa protezy (złamanie, pęknięcie)",
        value: "190 zł"
      },
      {
        category: "Protetyka",
        name: "Dostawienie zęba (klamry)",
        value: "200 zł"
      },
      {
        category: "Protetyka",
        name: "Każdy następny punkt",
        value: "50 zł"
      },
      {
        category: "Protetyka",
        name: "Modele diagnostyczne",
        value: "90 zł"
      },
      {
        category: "Protetyka",
        name: "Szyna wybielająca (góra + dół)",
        value: "700 zł"
      },
      {
        category: "Protetyka",
        name: "Szyna relaksacyjna",
        value: "500 zł"
      },
      {
        category: "Protetyka",
        name: "Zdjęcie korony lub mostu od punktu",
        value: "200 zł"
      },
      {
        category: "Protetyka",
        name: "Osadzenie korony",
        value: "200 zł"
      },
      {
        category: "Protetyka",
        name: "Szynowanie włókien od punktu",
        value: "150 zł"
      },
      {
        category: "Protetyka",
        name: "Prace w terminie expressowym",
        value: "+50% ceny" // Uwaga: To oznacza dodatkowe 50% do ceny podstawowej
      }
  ];

  return { services };
}
