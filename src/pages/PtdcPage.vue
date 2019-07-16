<template>
  <!-- <iframe class="i-frame" frameBorder="0" src="/static/site-ptdc/index.html" /> -->
  <iframe class="i-frame" frameBorder="0" src="https://fog-ptdc.netlify.com/" />
</template>

<style>
  .i-frame{
    width: 100%;
    min-height: calc(100vh - 70px);
  }
  @media screen and (max-width: 959px) {
    .i-frame {
      height: calc(100vh - 62px);
    }
  }
</style>
