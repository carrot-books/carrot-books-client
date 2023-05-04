<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-20 h-20 flex flex-wrap">
      <div class="move-orange">
        <p class="w-10 h-10 border bg-orange-300 rounded-full"></p>
      </div>
      <div class="move-blue1">
        <p class="w-10 h-10 border bg-blue-300 rounded-full"></p>
      </div>
      <div class="move-blue2">
        <div class="w-10 h-10 border bg-blue-300 rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes moveBlue1 {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateY(40px);
  }
  50% {
    transform: translate(-40px, 40px);
  }
  70% {
    transform: translate(-40px, 0px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes moveBlue2 {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateY(-40px);
  }
  50% {
    transform: translate(40px, -40px);
  }
  70% {
    transform: translate(40px, 0px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes moveOrange {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(40px);
  }
  50% {
    transform: translate(40px, 40px);
  }
  70% {
    transform: translate(0px, 40px);
  }
  to {
    transform: translateX(0px);
  }
}
.move-orange {
  animation: moveOrange 3.5s ease-in-out 0.3s infinite;
}

.move-blue1 {
  animation: moveBlue1 3.5s ease-in-out 0s infinite;
}

.move-blue2 {
  animation: moveBlue2 3.5s ease-in-out 0.6s infinite;
}
</style>
