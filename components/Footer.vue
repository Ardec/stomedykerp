<template>
  <div class="footer-container">
    <div class="footer">
      <div class="row1">
        <div class="openhours">
          <h3>Godziny otwarcia</h3>
          <div>Poniedziałek - Piątek: 8 - 20</div>
          <div>Sobota: nieczynne</div>
          <div>Niedziela: nieczynne</div>
        </div>
        <div class="oddzial1">
          <h3>Oddział I</h3>
          <h4>Poradnia Stomatologiczna NZOZ STOMEDYK</h4>
          <div>ul. Żabiniec 64/1, 31-215 Kraków</div>
          <div>Email: kontakt@stomedyk.pl</div>
          <div>Telefon: +48 668 810 810</div>
        </div>
        <div class="oddzial2">
          <h3>Oddział II</h3>
          <h4>Wojewódzki Specjalistyczny Szpital Dziecięcy im. św. Ludwika w Krakowie</h4>
          <div>ul. Strzelecka 2a, 31-503 Kraków</div>
          <div>Email: kontakt@stomedyk.pl</div>
          <div>Telefon: +48 668 810 810</div>
        </div>
      </div>
      <div class="row2">
        <div class="media">
          <div class="logo"><img class="logo1" src="/assets/nfz.png" alt="nfz" /></div>
          <div class="logo">
            <img class="logo2" src="/assets/mediraty.jpg" alt="mediraty" />
          </div>
          <div class="logo">
            <img class="logo3" src="/assets/znanylekarz.png" alt="znanylekarz" />
          </div>
        </div>
        <div class="info">
          <div class="icons">
              <div class="link_social">
          <a
            href="https://www.facebook.com/NZOZ-Stomedyk-102581402305192"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="icon fb"><Icon name="bxl:facebook-circle" /></div>
          </a>
          <a
            href="https://www.instagram.com/stomedyk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="icon inst"><Icon name="bxl:instagram" /></div>
          </a>
          <a
            href="https://www.google.com/maps/place/NZOZ+STOMEDYK/@50.0821442,19.9469003,15z/data=!4m6!3m5!1s0x47165b2110af3a73:0x1485a246fda95db8!8m2!3d50.0821442!4d19.9469003!16s%2Fg%2F11cn94d3yf?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="icon google"><Icon name="bxl:google" /></div>
          </a>
        </div>
          </div>
          <div class="copy">
            <div><b>Copyright © 2023 NZOZ STOMEDYK SP Z.O.O</b></div>
            <div class="icon policy"><b>Polityka prywatności</b></div>
            <div>Created by Kamil Kaczmarczyk K-Development</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1152px;
  padding: 20px 10px;
  text-align: center;
}
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.row1,
.row2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.media {
  flex-grow: 2;
  flex-basis: 0;
  display: flex;
  overflow: hidden;
  gap: 20px;
}

.openhours,
.oddzial1,
.oddzial2 {
  font-size: 1.2rem;
  text-align: left;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 280px;
  /* background: linear-gradient(to bottom, #e0f2fe, #f8fcff); */
  padding:30px;
  border-radius:8px;
  line-height: 1.6rem;
}
.media,
.info {
  text-align: left;
  align-items: center;
}
.row2 {
  align-items: center;
}
.logo1 {
  height: 50px;
}
.logo2 {
  height: 70px;
}
.logo3 {
  height: 70px;
}
.link_social{
    display:flex;
    flex-direction: row;
    padding:10px 0px;
}
.icon {
  /* color: #009eda; */
  transition: color 0.5s ease;
}
.icon:hover {
  cursor: pointer;
  color: #0ab1bc;
}
.policy{
    margin:10px 0px;
}
@media (max-width: 1152px) {
  .footer-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  text-align: center;
  max-width: 100vw;
}

  .row1, .row2{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:20px;
    padding:0px 40px;
  }

  .openhours, .oddzial1, .oddzial2 {
    max-width:100%;
    width:100%;
    padding: 20px;
  }
  .media {
  flex-grow: 0;
  flex-basis: 0;
  display: flex;
  overflow: visible;
  flex-direction: column;
  gap: 20px;
  margin-bottom:40px;
}
.logo1 {
  height: 80px;
}
.logo2 {
  height: 80px;
}
.logo3 {
  height: 80px;
}

}
</style>
