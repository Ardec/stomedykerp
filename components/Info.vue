<template>
    <div class="core-container">
         <img
      class="animate__animated animate__bounce logo-container"
      src="~/assets/img/kdev.png"
      alt="Discover Nuxt 3"
    />
        <h1>Co to jest K-ERP?</h1>
        <p>Rdzeń aplikacji webowej posiadający moduły podstawowe systemu ERP ( ang. Enterprise Resource Planning ) oraz funkcje CMS ( ang. Content Management ).K-ERP zawiera również wiele innych funkcjonalności i można go nazwać akceleratorem projektu lub wersją demo aplikacji.   </p><p> Rozpoczęcie budowy aplikacji z takim akceleratorem to jak budowa domu mając już fundamenty zamiast pustej działki:  <br> - Szybciej skończymy <br> - Sporo oszczędzamy <br> - Dostajemy dopracowany produkt <br> - Bonus dodatkowe funkcjonalności </p>
        <p>Aplikację można dalej rozwijać o nowe unikalne funkcjonalności</p>
        <h1>Aktualizacje</h1>
            <h2>K-ERP v.5.02.24</h2>
            <br>
            <ul>
                <li>Aplikacja front-endowa w Nuxt 3 oraz Vue 3 dostępna przez internet https://nuxt.com/</li>
                <li>API backendowe z bazą danych i logiką obsługującą aplikację </li>
                <li>Darmowy hosting na 1 rok lub do przekroczenia 5GB danych https://www.netlify.com/</li>
                <li>Subdomena</li>
                <li>Certyfikat SSL</li>
                <li>Zaimplementowane meta tagi pod SEO dla strony głównej</li>
                <li>Strona Logowania</li>
                <li>Zabepieczenie logowania tokenem pobieranym z bazy danych</li>
                <li>Strona Intro</li>
                <li>Dane informacyjne wyświetlane w różnych miejscach</li>
                <li>Strona zarządzania danymi informacyjnymi</li>
                <li>Rozwijane menu boczne</li>
                <li>Pasek górny i z informacją o użytkowniku i z możliwością wylogowywania</li>
                <li>Strona Rejestracji użytkownika</li>
                <li>Rangi uprawnień użytkowników</li>
                <li>Moduł zarządzania użytkownikami i edycji ich danych</li>
                <li>Wbudowany SSR - Server Side Rendering </li>
                <li>Skonfigurowana biblioteka Nuxt UI https://ui.nuxt.com/</li>
                <li>Tailwind css https://tailwindcss.com/</li>
                <li>Globalne kolory i czcionki</li>
                <li>Routing</li>
                <li>Zmienne globalne w pliku .env</li>
                <li>Możliwe różne Layouty dla podstron</li>
                <li>Animacje Animate.css https://animate.style/</li>
                <li>Ikony z Iconify https://icon-sets.iconify.design/</li>
                <li>Toasty z informacjami zwrotnymi ( np.udane logowanie )</li>

            </ul>
        <h1>EULA - End-User License Agreement</h1>
        <p>Licencja użytkownika końcowego - Pozwala na korzystanie ze skonfigurowanej kopii aplikacji, jej kopiowanie, rozpowrzechnianie oraz modyfikację. Producent nie przekazuje praw autorskich do kodu, ponieważ takie elementy jak rejestracja logowanie, oraz inne podstawowe funkcjonalności są powrzechnie znane a nie unikalne. Użytkownik może również w dowolnym momencie i na własny koszt przenieść całą aplikację na własne serwery ale jest to jednoznaczne z utratą przyszłęgo wsparcia technicznego ze strony producenta oprogramowania.</p>
    </div>
</template>

<style lang="scss" scoped>

.core-container{
    padding:20px;
    max-width:640px;
}
p {
    line-height: 1.6rem;
    padding-bottom:16px;
    }
ul{
    line-height:1.4rem;
    list-style-type:square;
}
img {
  height: 150px;
}
</style>