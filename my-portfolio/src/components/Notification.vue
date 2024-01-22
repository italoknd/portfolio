<template>
  <div class="notification">
    <p>
      Whoops... It seems like this project hasn't been published yet... I'm
      sorry! :&lpar;
    </p>
  </div>
</template>
<style scoped>
.notification {
  background-color: orange;
  border: 2px solid rgb(255, 153, 0);
  margin-top: 20px;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 4px;
  animation: notification 4s ease-in-out;
}

.notification > p {
  color: white;
}

@keyframes notification {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
