<template>
  <div class="main-container">
    <div class="welcome-container">
      <div class="welcome-text">
        <div class="header"><h2>Kompleksowa opieka Twoich zębów</h2></div>
        <div class="sub-text">
          <p>
            Świadczymy <b>pełen zakres usług</b>, który umożliwi Ci uzyskanie pięknego i
            zdrowego uśmiechu będącego Twoją wizytówką na co dzień.
          </p>
        </div>
      </div>
      <div class="button secondary-color-background">
        Zobacz więcej <Icon size="24px" name="mingcute:arrow-right-line" />
      </div>
      <div class="znany-link">
        <img class="logo-znany" src="/assets/znanylekarz.png" alt="znanylekarz" />
      </div>
    </div>
     <Hero />
    <Oferta />
    <Opinions />
    <Form />
  </div>
</template>

<script setup>
</script>

<style lang="css">
body {
  width: 100%;
}
.welcome-container {
  max-width: 700px;
  margin: 40px 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.button {
  border-radius: 12px;
  border: solid #f0f9ff 1px;
  padding: 12px 24px;
  font-weight: bold;
  max-width: 200px;
  /* color:black; */
}
.button:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.5s ease-in-out;
}
.logo-znany {
  margin-top: 8px;
  height: 40px;
  transition: all 0.5s ease-in-out;
}
.logo-znany:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>
