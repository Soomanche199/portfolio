<template>
  <header>
    <div id="sidebar">
      <n-link to="/" class="header__home">
        <div class="dot-wrapper">
          <div class="dot position1"></div>
          <div class="dot position2"></div>
          <div class="dot position3"></div>
          <div class="dot position4"></div>
          <div class="dot position5"></div>
          <div class="dot position6"></div>
          <div class="dot position7"></div>
          <div class="dot position8"></div>
          <div class="dot position9"></div>
        </div>
      </n-link>
    </div>
    <div id="topbar">Sooman.</div>
  </header>
</template>

<script>
export default {
  name: 'VNavbar',
}
</script>

<style scoped>
#sidebar {
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  @media (min-width: 992px) {
    width: 90px;
  }
}

.header__home {
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 15px;
  background-color: #f3c583;

  @media (min-width: 992px) {
    width: 90px;
    height: 90px;
    padding: 30px;
  }
}

.dot-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;

  @media (min-width: 992px) {
    width: 6px;
    height: 6px;
  }

  &.position1 {
    left: 0;
    top: 0;
  }

  &.position2 {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 0;
  }

  &.position3 {
    right: 0;
    top: 0;
  }

  &.position4 {
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  &.position5 {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &.position6 {
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  &.position7 {
    bottom: 0;
    left: 0;
  }

  &.position8 {
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  &.position9 {
    bottom: 0;
    right: 0;
  }
}

#topbar {
  height: 50px;
  width: calc(100% - 50px);
  position: absolute;
  top: 0;
  left: 90px;
  overflow: hidden;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  padding: 15px;
  font-weight: 700;
  text-transform: uppercase;

  @media (min-width: 992px) {
    backdrop-filter: none;
    background-color: transparent;
    padding: 30px;
  }
}
</style>
