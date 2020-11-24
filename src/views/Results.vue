<template>
  <user-layout>
    <div class="results">
      <h2>Résultats du test des intelligences multiples</h2>
      <div class="score">
        <span>Les résultats du test ont été transmis à votre conseiller(ère), reprenez contact avec lui(elle) pour
          poursuivre la réflexion sur votre projet d'évolution professionnelle.</span>
      </div>
    </div>
    <div class="reset-button">
      <div class="button">
        <button class="btn btn-primary btn-lg" type="button" @click="$router.push('/')">Recommencer le test</button>
      </div>
    </div>
  </user-layout>
</template>

<script>
import {mapGetters} from "vuex";
import emailjs from 'emailjs-com';
import UserLayout from "@/layouts/UserLayout";

export default {
  name: "Results",
  components: {UserLayout},
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.results = this.getResults
    this.results.sort(this.compare)
    this.sendEmail()
  },
  computed: {
    ...mapGetters(['getResults', 'getInfos'])
  },
  methods: {
    compare(a, b) {
      if (a.result < b.result) {
        return 1;
      }
      if (a.result > b.result) {
        return -1;
      }
      return 0;
    },
    sendEmail() {
      let emailLines = ''
      this.results.forEach((result) => {
        emailLines += '    - <b>' + result.label + ' :</b> ' + result.result + '<br>'
      })
      emailjs.send(
          'service_intell_multi',
          'template_intell_multi',
          {
            results: emailLines,
            firstname: '<b>' + this.getInfos.firstname + '</b>',
            lastname: '<b>' + this.getInfos.lastname + '</b>',
            recipient: this.getInfos.consultant
          },
          'user_5IFrM8CHH0gfe3Xt6kHQI')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((error) => {
            console.log('FAILED...', error);
          })
    }
  }
}
</script>

<style scoped>
.results {
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 3%;
  font-weight: 700;
}

.score {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

span {
  font-size: 22px;
}

.reset-button {
  height: 20%;
}
</style>
