<template>
  <div class="form">
     <div class="header">
            <h1>Kontakt</h1>
            <hr width="40px;">
        </div>
        <br>
    <div class="form-container">
      
      <div class="column1">
        <div class="form-image"><img src="/assets/form.webp" alt="Opis obrazu" /></div>
      </div>
      <div class="column2">
        <div class="form-header">
          <h2>Masz pytanie? Skontaktuj się z nami!</h2>
        </div>
        <form>
          <div class="form-group">
            <label for="name">Imię:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="form-group">
            <label for="surname">Nazwisko:</label>
            <input type="text" id="surname" name="surname" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="form-group">
            <label for="phone">Numer telefonu:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div class="form-group">
            <label for="message">Treść wiadomości:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit secondary-color-background">Wyślij</button>
        </form>
        <div class="form-info secondary-color-background">
          Uprzejmie prosimy, jeżeli to możliwe, o kontakt drogą telefoniczną pod numerem:
          +48 668 810 810. To znacznie przyspiesza umawianie terminów. Dziękujemy 😊
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.form-container {
  text-align: left;
}
.form-container {
  max-width: 1152px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  gap:20px;
}
.column1,
.column2 {
  flex: 1;
}
.form-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-image > img {
  border-radius: 12px;
  width: 100%;
}
.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 14px;
  border: none;
  background: linear-gradient(to bottom, #fafafa, #f9f9f9);
  border-radius: 12px;
  box-sizing: border-box; /* Dodane */
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
textarea:focus {
  outline: none;
}

textarea {
  height: 100px;
}

button {
  border-radius: 12px;
  border: solid #f0f9ff 1px;
  padding: 16px 30px;
  font-weight: bold;
  max-width: 200px;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
.form-info {
  margin: 10px 0px;
  padding: 20px;
  border-radius: 12px;
  border: solid #f0f9ff 1px;
}

@media (max-width: 1000px) {
  .form-container {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
  }
  .column1,
  .column2 {
    padding: 20px;
  }
}
</style>
