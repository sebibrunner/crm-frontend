<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
    props: ['receiver'],
    data() {
        return {
            newReceiver: {},
        }
    },
    methods: {
        addReceiver() {
            console.log("add receiver: ", this.newReceiver)
        }
    }
})
</script>

<template>
    <div class="shadow-md rounded-lg py-4 px-2 mx-2">
        <h1><b>Receiver</b></h1>
        <div>Prename: {{ receiver.prename }}</div>
        <div>surname: {{ receiver.surname }}</div>
        <div>street: {{ receiver.street }}</div>
        <div>streetnumber: {{ receiver.streetnumber }}</div>
        <div>city: {{ receiver.city }}</div>
        <div>zip: {{ receiver.zip }}</div>

        <input v-model="newReceiver.prename" placeholder="Position prename" />
        <input v-model="newReceiver.surname" placeholder="Position surname" />
        <input v-model="newReceiver.street" placeholder="Position street" />
        <input v-model="newReceiver.streetnumber" placeholder="Position streetnumber" />
        <input v-model="newReceiver.city" placeholder="Position city" />
        <input v-model="newReceiver.zip" placeholder="Position zip" />
        <button @click="addReceiver">Add Receiver</button>
    </div>
</template>
