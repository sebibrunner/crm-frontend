<script setup lang="ts">
import CompanyItem from "@/components/CompanyItem.vue";
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      companies: [{
  name: "Testcompany 1"
},
  {
    name: "Testcompany 2"
  }],
  newCompany: {name: ""}
    }
  },
  methods: {
    addCompany(companyName: string){
      this.companies.push({"name": companyName})
    }
  }
})
</script>

<template>
  <CompanyItem v-for="company in companies">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{company.name}}</template>
  </CompanyItem>
  <div>
      <h1>Add a new Company</h1>
      <input v-model="newCompany.name" placeholder="Company Name" />
      <button @click="addCompany(newCompany.name)">Add company</button>
    </div>
</template>
