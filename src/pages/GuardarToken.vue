<template>
    <div>
        <h1>TOKEN</h1>
        <br>
        <label for="">Usuario</label>
        <input for="" v-model="tokenC.usuario">
        <br>
        <label for="">Contrasenia</label>
        <input type="text" v-model="tokenC.contrasenia">
        <br>
        <label for="">Semilla</label>
        <input type="text" v-model="tokenC.semilla">
        <br>
        <label for="">Apellido</label>
        <input type="text" v-model="tokenC.tiempoVigente">
        <br>
        <label for=""> Cedula</label>
        <input type="text" v-model="tokenC.token">
        <br>
        <button @click="guardar">Guardar </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tokenC: {
                usuario:'',
                contrasenia:'',
                semilla: '',
                tiempoVigente: '',
                token: ''
            }
        }
    },

    methods: {
        async guardar() {
            axios.post("http://localhost:8083/API/v1.0/Autorizacion/tokens/obtener/", {
                usuario: this.tokenC.usuario,
                contrasenia: this.tokenC.contrasenia,
                semilla: this.tokenC.semilla,
                tiempoVigente :this.tokenC.tiempoVigente,
                token: this.tokenC.token

                
            })
            
        },

    }

}
</script>

<style></style>