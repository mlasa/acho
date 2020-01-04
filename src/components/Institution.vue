<template
  ><label @click="selectInstitution"
    ><div class="institution is-warning">
      <strong>{{ institution.fantasyName }}</strong><br/>
      <span>{{ institution.companyName }}</span><br/>
      <span>Telefone: {{ institution.phone }}</span><br/>
      <span>E-mail: {{ institution.phone }}</span><br/>
      <div class="address">
        <strong
          >{{ institution.address.city }} -
          {{ institution.address.state }}</strong
        ><br/>
        <label
          >Endereço: {{ institution.address.street }}, {{ institution.address.number }}</label
        ><br/>
        <label>Bairro: {{ institution.address.neighborhood }}</label><br/>
        <label>CEP: {{ institution.address.zipCode }}</label>
      </div>
    </div></label
  ></template
>

<script>
  export default {
    props: ['institution'],
    methods: {
      selectInstitution() {
        console.log("emitinstitution")
        this.$emit('selectInstitution', this.institution);
      }
    }
  }
</script>
