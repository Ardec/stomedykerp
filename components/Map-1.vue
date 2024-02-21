<template>
  <div class="map">
     <!-- <div class="header">
            <h1>Kontakt</h1>
            <hr width="40px;">
        </div>
        <br> -->
    <div class="map-container">
      <div class="column1">
        <div class="oddzial1">
          <h3>Oddział 1</h3>
          <h4>Poradnia Stomatologiczna NZOZ STOMEDYK</h4>
          <div>ul. Żabiniec 64/1, 31-215 Kraków</div>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10241.187361303379!2d19.945941!3d50.080729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165afbedca03ed%3A0xf62ed50fef9714bb!2s%C5%BBabiniec%2064%2C%2031-215%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1636670073000!5m2!1spl!2spl" title="mapa oddział drugi" class="map-iframe" loading="lazy" style="height: 600px; width: 100%;"></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.map {
    max-width: 1152px;
    width: 100%;
    margin: auto; /* Centrowanie kontenera na większych ekranach */
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

