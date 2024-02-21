<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
  title: 'Strona Internetowa Stomedyk',
  meta: [
    { name: 'description', content: 'Strona Internetowa Stomedyk' }
  ],
  // bodyAttrs: {
  //   class: 'test'
  // },
   script: [
    {
      innerHTML: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1517869118757610');
        fbq('track', 'PageView');
      `
    }
  ],
})

</script>

<style>

/* Globalne style dla aplikacji */


body {
  width:100%;
  font-family: Georgia, serif;
  
  font-size:1.2rem; 
  background-color: #FFFFFC;
  color:#575757;

}

.secondary-color-background{
background: linear-gradient(to bottom, #fafafa, #f9f9f9);
}

.accent-color-background{
background: linear-gradient(to bottom, #00579c, #0c4470);
}

.fb{
  color:#4267B2;
}
.inst{
  color:#E1306C;
}
.google{
  color:#4285F4;
}

h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

button, input, optgroup, select, textarea {
    font-size: 13px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

button {
  background-color: rgb(240, 240, 240);
  color: black;
  font-family: Arial, serif;

}

hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
}

img, svg, video, canvas, audio, iframe, embed, object {
    display: inline; 
    vertical-align: baseline;
}

*, ::before, ::after {
    box-sizing: content-box;
}

a:hover {
  opacity: 0.8;
  color: #01a8cb;
}

</style>
