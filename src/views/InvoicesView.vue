<script setup lang="ts">
import CompanyItem from "@/components/CompanyItem.vue";
import PositionsComponent from "@/components/PositionsComponent.vue";
import ReceiverComponent from "@/components/ReceiverComponent.vue";
import { defineComponent } from 'vue'
import axios from "axios";
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      invoices: [],
      newInvoice: {
        invoicedate: Date.now(),
        positions: [],
        receiver: {},
      },
    }
  },
  components: {
    PositionsComponent,
    ReceiverComponent
  },
  methods: {
    fetchCompanies(){
      axios.get("http://localhost:5000/invoices").then((res) => {
        this.invoices = res.data;
      })
    }
  },
  created() {
    this.fetchCompanies();
  }
})
</script>

<template>
  <CompanyItem v-for="invoice in invoices">
    <template #icon>
      <DocumentationIcon />
    </template>
  </CompanyItem>
  <div class="shadow-md">
      <h1>Add a new Invoice</h1>
      <input v-model="newInvoice.invoicedate" placeholder="Invoice Date" />
      <PositionsComponent :positions="this.newInvoice.positions"/>
      <ReceiverComponent :receiver="this.newInvoice.receiver" />
      <button @click="addCompany(newCompany.name)">Add company</button>
    </div>
</template>
