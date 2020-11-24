<template>
  <user-layout>
    <h1>Bienvenue au test des intelligences multiples</h1>
    <div class="body">
      <span>Nous avons besoin de quelques informations avant que vous puissiez effectuer le test.</span>
      <div class="form">
        <div class="form-group">
          <label for="firstname">Prénom</label>
          <input id="firstname" v-model="firstname" class="form-control" type="text" @blur="check('first')">
          <span v-if="errorFirstname !== ''" class="error">{{ errorFirstname }}</span>
        </div>
        <div class="form-group">
          <label for="lastname">Nom</label>
          <input id="lastname" v-model="lastname" class="form-control" type="text" @blur="check('last')">
          <span v-if="errorLastname !== ''" class="error">{{ errorLastname }}</span>
        </div>
        <div class="form-group">
          <label for="inputState">Conseiller(ère)</label>
          <select id="inputState" v-model="selectedConsultant" class="form-control">
            <option v-for="consultant in consultants" :key="consultant.id" :value="consultant.email">
              {{ consultant.firstname }} {{ consultant.lastname }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="button">
      <button class="btn btn-primary btn-lg" type="button" @click="nextStep()">Valider</button>
    </div>
  </user-layout>
</template>

<script>
import UserLayout from "@/layouts/UserLayout";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Home",
  components: {UserLayout},
  data() {
    return {
      consultants: [
        {
          id: 1,
          firstname: 'Isabelle',
          lastname: 'SALLÉ',
          email: 'isabelle.salle@saint-herblain.fr'
        },
        {
          id: 2,
          firstname: 'Laurence',
          lastname: 'GESVRET',
          email: 'laurence.gesvret@saint-herblain.fr'
        },
        {
          id: 3,
          firstname: 'Céline',
          lastname: 'MOUSSION',
          email: 'celine.moussion@saint-herblain.fr'
        },
      ],
      firstname: '',
      lastname: '',
      selectedConsultant: '',
      errorFirstname: '',
      errorLastname: ''
    }
  },
  mounted() {
    this.firstname = this.getInfos.firstname
    this.lastname = this.getInfos.lastname
    this.selectedConsultant = this.getInfos.consultant
  },
  computed: {
    ...mapGetters(['getInfos'])
  },
  methods: {
    ...mapActions(['setInfos', 'setSnackBar']),
    nextStep() {
      if (this.firstname !== '' && this.lastname !== '' && this.selectedConsultant !== '') {
        this.setInfos({firstname: this.firstname, lastname: this.lastname, consultant: this.selectedConsultant})
        this.$router.push('accueil')
      } else {
        this.firstname === '' ? this.errorFirstname = 'Ce champ est obligatoire' : ''
        this.lastname === '' ? this.errorLastname = 'Ce champ est obligatoire' : ''
        this.setSnackBar({type: 'fail', text: 'Un ou plusieurs champs sont incorrects'})
      }
    },
    check(input) {
      if (input === 'first') {
        this.firstname === '' ? this.errorFirstname = 'Ce champ est obligatoire' : this.errorFirstname = ''
      } else if (input === 'last') {
        this.lastname === '' ? this.errorLastname = 'Ce champ est obligatoire' : this.errorLastname = ''
      }
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 3%;
  font-weight: 700;
}

.body {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: center;
}

span {
  margin-top: 2%;
}

.form {
  width: 100%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 40%;
}

.error {
  font-weight: bold;
  color: red;
}

.button {
  width: 100%;
  height: 20%;
}
</style>
