<script setup>


</script>

<template>
<div class="body">
<nav>
    <RouterLink to="/">Todo</RouterLink>
  
    <span>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/todo">Todos</RouterLink>
    </span>
</nav>
<RouterView />
</div>
</template>




<style scoped>

.body{
    display: flex;
    flex-direction: column;
    justify-content: center;
 

}

nav{

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;


   
}


RouterLink{
    cursor: pointer;
    

}


span{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 30px;

}
</style>
