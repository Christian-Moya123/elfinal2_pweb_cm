<template>
    <div class="container">
        <div>
            <h1 class="texto">BIENVENIDO</h1>
            <h3 class="texto">Elige a donde quieres ir ahi abajo</h3>
        </div>

        <nav>
            <router-link to="ingresar-estudiante">Ingresar Estudiante</router-link>
            <br>
            <router-link to="ver-estudiante">Ver Estudiante</router-link>
            <br>
            <router-link to="guardar-token">Guardar Token</router-link>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
nav {
    margin: 0px 15px
}
.container{
    background-color: rgba(156, 246, 246, 0.386);
}

.texto{
    color: blue;
}
</style>