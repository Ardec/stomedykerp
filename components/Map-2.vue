<template>
  <div class="map">
     <!-- <div class="header">
            <h1>Kontakt</h1>
            <hr width="40px;">
        </div>
        <br> -->
    <div class="map-container">
      <div class="column1">
         <div class="oddzial2">
          <h3>Oddział 2</h3>
          <h4>Wojewódzki Specjalistyczny Szpital Dziecięcy im. św. Ludwika w Krakowie</h4>
          <div>ul. Strzelecka 2a, 31-503 Kraków</div>
          <div>Email: kontakt@stomedyk.pl</div>
          <div>Telefon: +48 668 810 810</div>
        </div>
        <div class="openhours">
          <h3>Godziny otwarcia</h3>
          <div>Poniedziałek - piątek: 8.00 - 20.00</div>
          <div>Sobota: nieczynne</div>
          <div>Niedziela: nieczynne</div>
        </div>
      </div>
      <div class="column2">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.2248016469325!2d19.947786915717376!3d50.063351479423815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1714a4172b%3A0x59a76834348c3ba8!2sStrzelecka%202A%2C%2031-503%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1637139514300!5m2!1spl!2spl" title="mapa oddział pierwszy" class="map-iframe" loading="lazy" style="height: 600px; width: 100%;"></iframe> </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.map {
    max-width: 1152px;
    width: 100%;
    margin: auto; 
    line-height: 1.4rem;
}
.map-iframe {
  height: 600px;
  width: 100%;
  border: none; /* Usunięcie ramki */
  border-radius: 8px; /* Opcjonalnie, aby nadać zaokrąglenia */
}

.map-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  gap: 20px;
}

.column1,
.column2 {
  flex: 1;
}

.openhours,
.oddzial1,
.oddzial2 {
  text-align: left;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 40px;
}

@media (max-width: 1152px) {
  .map {
    width: 100%; /* Usunięcie nadmiernego vw */
    margin: 20px; /* Dodanie marginesu */
  }

  .map-container {
    flex-direction: column;
  }

  .column1,
  .column2 {
    padding: 0 20px; /* Zmniejszenie paddingu */
  }

  .openhours, .oddzial1, .oddzial2 {
    padding: 20px;
  }
}
</style>

