<template>
    <div>
        <div>
            <h1>Estuduiante</h1>
            <label for="">Token</label>
            <!-- <input type="text" v-model="estudiante.token"> -->
            <br>
            <label for="">Nombre</label>
            <input type="text" v-model="estudiante.nombre">
            <br>
            <label for="">Apellido</label>
            <input type="text" v-model="estudiante.apellido">
            <br>
            <label for=""> Cedula</label>
            <input type="text" v-model="estudiante.cedula">
            <br>
            <button @click="guardar">Guardar </button>

            <hr>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apllido</th>
                        <th>Cedula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(estu, index) in estudiantes" :key="index">
                        <td>{{ estu.id }}</td>
                        <td>{{ estu.nombre }}</td>
                        <td>{{ estu.apellido }}</td>
                        <td>{{ estu.cedula }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td class="text-end" colspan="4"><b></b></td>
                    </tr>
                </tfoot>
            </table>


        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            estudiante: {
                nombre: '',
                apellido: '',
                cedula: '',
                estudiantes:[]
            }
        }
    },
    methods: {
        async guardar() {
            axios.post("http://localhost:8082/API/v1.0/Autorizacion/estudiantes", {
                nombre: this.estudiante.nombre,
                apellido: this.estudiante.apellido,
                cedula: this.estudiante.cedula,

                
            })
            this.estudiantes.push(this.estudiante)
            
        },

    }

}
</script>

<style></style>