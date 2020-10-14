import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    verboLing: [
      "J'aime les jeux de mots et autres blagues du genre",
      "Je me sens à l'aise dans le monde de la langue et des mots et j'en tire un renforcement positif",
      "J'aime faire des mots croisés et jouer à des jeux",
      "Je me rappelle mot pour mot ce que les gens me disent",
      "J’aime participer à des débats ou à des discussions",
      "Je préfère les questions à développer que les questions à choix multiples",
      "J’aime tenir un journal ou écrire des histoires ou des articles",
      "J’aime beaucoup lire"
    ],
    logiqueMath: [
      "Je travaille mieux quand mon plan de travail est bien organisé",
      "J’aime les mathématiques et les sciences",
      "Je garde une liste des choses à faire",
      "J’aime jouer à des jeux de réflexion ou qui font appel à la pensée logique comme Jeopardy! et Cluedo",
      "J’aime savoir le pourquoi des choses et chercher des éclaircissements aux questions qui m’intéressent",
      "Je travaille mieux avec un agenda ou un calendrier",
      "Je saisis rapidement les relations de cause à effet",
      "Mes estimations sont souvent bonnes"
    ],
    visioSpatiale: [
      "Je comprends les combinaisons de couleurs et vois quelles couleurs vont bien ensemble",
      "J’aime faire des puzzles, des labyrinthes ou des jeux de patience",
      "Je n’ai pas de mal à lire les cartes",
      "J’ai un bon sens de l’orientation",
      "Dans les films, je m’intéresse particulièrement aux scènes et aux activités",
      "Quand je dors, mes rêves me paraissent très réels",
      "Je peux prévoir les mouvements et les conséquences dans un plan de jeu (par exemple au hockey, aux échecs)",
      "J’ai une mémoire surtout visuelle"
    ],
    interperso: [
      "Je travaille mieux quand j’interagis avec les autres",
      "Je préfère les sports d’équipe aux sports individuels",
      "La présence des autres me donne de l’énergie",
      "Je préfère faire des choses en groupe plutôt qu’être seul",
      "J’aime apprendre à connaître les autres cultures",
      "J’ai l’habitude de parler de mes problèmes personnels avec mes amis",
      "J’aime partager mes idées et mes sentiments avec d’autres",
      "Je travaille mieux au sein d’un groupe où je peux discuter avec les autres de diverses questions"
    ],
    intraperso: [
      "J’aime ma solitude et avoir un monde à moi",
      "J’ai quelques amis proches",
      "J’ai des opinions bien arrêtées sur des questions controversées",
      "Je travaille mieux quand je peux le faire à mon rythme",
      "Je ne me laisse pas influencer facilement par les autres",
      "Je comprends bien ce que je ressens et comment je réagis aux circonstances",
      "Je soulève souvent des questions sur les valeurs et les croyances",
      "Je me sais responsable de mon comportement"
    ],
    corpoKine: [
      "J’aime bouger, taper du pied ou me remuer quand je suis assis",
      "J’aime les sports aux sensations extrêmes (comme le kayak de mer, la planche à neige, le vélo de montagne)",
      "Je suis curieux sur le plan des sensations et j’aime toucher les objets pour en sentir la texture",
      "J’ai une bonne coordination",
      "J’aime le travail manuel",
      "Je préfère participer physiquement plutôt que de rester assis et de regarder",
      "Je comprends mieux les choses si je les fais (les touche, les bouge ou interagis avec elles)",
      "J’aime créer, faire des choses avec mes mains"
    ],
    musicale: [
      "Je joue de la musique dans ma tête",
      "Pour me rappeler des choses, je compose des comptines",
      "Il m’est facile de suivre le rythme d’une musique",
      "J’aime mettre une musique à des chansons ou des poèmes",
      "Quand une musique joue, je bats la cadence",
      "Je perçois les fausses notes",
      "Je trouve facile de m’engager dans des activités musicales",
      "Je suis fier de mes réalisations musicales"
    ],
    naturaliste: [
      "J’ai une collection de coquillages, de tasses, de pierres, de cartes de hockey, etc",
      "Je remarque les similarités et les différences dans les arbres, les fleurs et autres objets de la nature",
      "Je contribue activement à la protection de l’environnement",
      "J’aime faire des fouilles et découvrir des objets et d’autres choses inhabituelles",
      "Je préfère être à l’extérieur qu’à l’intérieur",
      "J’aime faire des plantations et prendre soin d’un jardin",
      "J’aime pêcher et suivre des animaux à la piste",
      "La meilleure façon d’apprendre pour moi est d’aller en excursion, de voir des expositions sur la nature, etc"
    ]
  },
  getters: {
    getVerboLing: function (state) {
      return state.verboLing
    },
    getLogiqueMath: function (state) {
      return state.logiqueMath
    },
    getVisioSpatiale: function (state) {
      return state.visioSpatiale
    },
    getInterperso: function (state) {
      return state.interperso
    },
    getIntraperso: function (state) {
      return state.intraperso
    },
    getCorpoKine: function (state) {
      return state.corpoKine
    },
    getMusicale: function (state) {
      return state.musicale
    },
    getNaturaliste: function (state) {
      return state.naturaliste
    },
  },
  mutations: {
    setVerboLing (state, value) {
      state.verboLing = value
    },
    setLogiqueMath (state, value) {
      state.logiqueMath = value
    },
    setVisioSpatiale (state, value) {
      state.visioSpatiale = value
    },
    setInterperso (state, value) {
      state.interperso = value
    },
    setIntraperso (state, value) {
      state.intraperso = value
    },
    setCorpoKine (state, value) {
      state.corpoKine = value
    },
    setMusicale (state, value) {
      state.musicale = value
    },
    setNaturaliste (state, value) {
      state.naturaliste = value
    },
  },
  actions: {
    setVerboLing ({ commit }, content) {
      commit('setVerboLing', content)
    },
    setLogiqueMath ({ commit }, content) {
      commit('setLogiqueMath', content)
    },
    setVisioSpatiale ({ commit }, content) {
      commit('setVisioSpatiale', content)
    },
    setInterperso ({ commit }, content) {
      commit('setInterperso', content)
    },
    setIntraperso ({ commit }, content) {
      commit('setIntraperso', content)
    },
    setCorpoKine ({ commit }, content) {
      commit('setCorpoKine', content)
    },
    setMusicale ({ commit }, content) {
      commit('setMusicale', content)
    },
    setNaturaliste ({ commit }, content) {
      commit('setNaturaliste', content)
    },
  },
  modules: {}
})
