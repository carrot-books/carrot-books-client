<template>
  <div class="flex w-screen h-screen">
    <NavigationBar />
    <div class="flex-col w-full overflow-auto">
      <Header />
      <slot></slot>
    </div>
  </div>
</template>
