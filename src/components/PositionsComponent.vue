<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
    props: ['positions'],
    data() {
        return {
            newPosition: {},
        }
    },
    methods: {
        addPosition() {
            console.log("Add following position: ", this.newPosition)
        },
    }
})
</script>

<template>
    <div class="shadow-md rounded-lg py-4 px-2 mx-2">
        <h1><b>Positions</b></h1>
        <div v-for="position in positions">
            <div>Description: {{ position.description }}</div>
            <div>Quantity: {{ position.quantity }}</div>
            <div>Price: {{ position.price }}</div>
        </div>
        <input v-model="newPosition.description" placeholder="Position description" />
        <input v-model="newPosition.quantity" placeholder="Position quantity" />
        <input v-model="newPosition.price" placeholder="Position price" />
        <button @click="addPosition">Add Position</button>
    </div>
</template>
