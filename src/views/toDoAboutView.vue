<template>
    <div class="container about">
      <h1>Vue Todos About page</h1>
      <p>Vue Todos is a CRUD Todo tracking application created for a Vue 3 Crash Course by John Komarnicki. Completed by Mahir Daiyan Khan. </p>
      <p>Track your daily task's using this todo tracker with abilities to save, complete, edit & delete todos. </p>
      <p>Feel free to add on to this application with functionalities such as the ability to drag and reorder todos, animate creation/deletion of todos or even create this into a full stack application with the ability to have different lists for different days of tracking todos! </p>
    </div> 
</template>

<style>
* {
  font-family: Rubik, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (min-width: 1024px) {
  .about {
    padding: 25px 16px;
  }

  .container .about {
    max-width: 1100px;
    margin: 0 auto;
    padding: 25px 16px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 15px;
    font-weight: bold;
  }

  p {
    margin: 1em 0;
  }
}
</style>

