import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    verboLing: [
      "J’apprécie les jeux de mots.",
      "J’ai une bonne mémoire pour les noms de personnes, de lieux, les dates ou les détails.",
      "J’aime résoudre des mots croisés ou jouer au Scrabble.",
      "J’ai de la facilité à écrire.",
      "Je m’exprime avec un vocabulaire riche.",
      "J’ai une assez bonne mémoire par rapport à ce que je lis ou par rapport à ce que j’entends.",
      "Je suis attentif (ve) lorsque j’écoute une conférence, un exposé.",
      "Le fait de prendre des notes m’aide à me comprendre et à mémoriser.",
      "J’aime lire pendant mes temps libres.",
      "J’aime raconter des histoires et des farces."
    ],
    logiqueMath: [
      "J’adore résoudre des énigmes ou faire des casse-tête qui demandent de la logique.",
      "J’aime classifier et catégoriser.",
      "Je peux passer des heures à tenter de résoudre des problèmes.",
      "Avant de me décider à quelque chose, je pèse le pour et le contre.",
      "Je suis habile aux jeux de stratégie et je gagne souvent.",
      "Lorsque j’étais enfant ou adolescent(e), j’avais un kit de chimie ou un autre kit de science avec lesquel j’aimais faire des expériences.",
      "Le fait que je sois structuré(e) contribue au succès de ce que j’entreprends.",
      "Je compte rapidement dans ma tête.",
      "Je trouve rapidement les failles dans le raisonnement des gens.",
      "Je me pose beaucoup de questions sur le fonctionnement des objets."
    ],
    visioSpatiale: [
      "Je peux facilement reconnaître la rotation d’une figure géométrique dans l’espace.",
      "J’aime les exercices de visualisation. Quand je songe à réaménager une pièce, je peux facilement la voir dans ma tête.",
      "J’aime visionner des films, des diapositives et regarder des photographies.",
      "Je m’oriente facilement dans une nouvelle ville.",
      "Lorsqu’un livre est illustré, je m’intéresse d’abord et surtout aux illustrations.",
      "Je dessine des objets et des personnes de façon précise.",
      "Je lis des cartes, des tableaux et des diagrammes sans difficulté.",
      "Je tiens ma maison ou mon bureau en ordre : une place pour chaque chose; chaque chose à sa place.",
      "Je vois des images dans ma tête quand je pense à quelque chose.",
      "Je passe beaucoup de temps libre à dessiner."
    ],
    interperso: [
      "Je participe à des clubs sociaux ou sportifs.",
      "J’aime m’exprimer dans les discussions de famille.",
      "J’organise souvent des activités dans mon entourage.",
      "Je suis à l’écoute des sentiments des autres; j’en tiens compte.",
      "J’aime sortir pour rencontrer des amis.",
      "J’aime bavarder sur tout et sur rien.",
      "Je suis celui que l’on consulte lorsqu’il y a un conflit dans un groupe.",
      "Je me plais à jouer aux cartes ou aux jeux de société.",
      "Je semble être une personne populaire.",
      "J’offre spontanément de l’aide à mes amis lorsqu’ils en ont besoin."
    ],
    intraperso: [
      "J’aime me retrouver seul(e) pour poursuivre mes intérêts personnels.",
      "Je travaille bien seul(e).",
      "Je me plais à penser à ma vie, à mes désirs et à mes croyances.",
      "Je suis entreprenant(e).",
      "J’ai confiance en moi.",
      "Je réagis fortement aux opinions controversées.",
      "Je décide par moi-même ce que je pense, ce que je choisis, ce que je fais.",
      "J’ai besoin de savoir pourquoi je devrais faire quelque chose avant d’accepter de la faire.",
      "Je suis motivé(e) à travailler seul dans certains projets.",
      "Je suis indépendant(e) et je tiens à mes idées."
    ],
    corpoKine: [
      "Il m’est difficile de rester assis trop longtemps; j’ai besoin de bouger.",
      "Je peux mimer les gestes, les manières et les comportements d’autres personnes.",
      "J’aime monter et démonter des objets.",
      "J’aime les films qui procurent des sensations fortes !",
      "Je touche les objets lorsque je me promène ou lorsque je me déplace dans la maison.",
      "J’apprends en faisant.",
      "Je suis habile dans la pratique de plusieurs sports.",
      "Je suis habile de mes mains; j’aime travailler avec des outils ou des instruments.",
      "J’ai besoin de toucher les gens lorsque je leur parle.",
      "Je m’adonne à des activités physiques de façon régulière."
    ],
    musicale: [
      "Je suis sensible à la musicalité des poèmes, des textes, de la parole.",
      "Je chante juste ou je joue d’un instrument de musique.",
      "J’aime les concerts, les récitals, les comédies musicales ou l’opéra.",
      "J’ai de la difficulté à me concentrer sur un travail lorsque j’écoute la radio ou la télévision.",
      "Je m’intéresse à toutes sortes de musiques; j’en écoute régulièrement, à la radio ou sur disque.",
      "Je reconnais les fausses notes dans l’exécution d’une pièce musicale.",
      "Je peux suivre la mesure dans une pièce musicale.",
      "Il m’est facile de bouger ou de danser avec rythme.",
      "Je me rappelle facilement les mélodies que j’entends.",
      "Je suis sensible aux bruits et aux sons."
    ],
    naturaliste: [
      "Je possède un télescope, des jumelles ou un microscope.",
      "J’aime les randonnées de plein air, la chasse ou la pêche.",
      "Je considère qu’il est important de préserver nos parcs nationaux. J’aime fréquenter les parcs Nature.",
      "J’ai le « pouce vert ».",
      "J’aime collectionner des objets puis les classer.",
      "J’aime être en contact avec les animaux ou les observer dans leur environnement.",
      "Je me préoccupe de l’environnement dans mes gestes quotidiens (recyclage, usage des ressources).",
      "J’aime identifier les oiseaux, les plantes, les arbres.",
      "Le contact avec la nature m’apaise, me calme.",
      "Je m’intéresse à l’horticulture."
    ],
    results: [
      {label: 'Verbo-Linguistique', result: 0},
      {label: 'Logico-Mathématiques', result: 0},
      {label: 'Visuo-Spatiale', result: 0},
      {label: 'Interpersonnelle', result: 0},
      {label: 'Intrapersonnelle', result: 0},
      {label: 'Kinesthésique', result: 0},
      {label: 'Musicale', result: 0},
      {label: 'Naturaliste', result: 0}
    ],
    infos: {
      firstname: '',
      lastname: '',
      consultant: 'isabelle.salle@saint-herblain.fr'
    },
    newSnack: {
      'type': 'success',
      'text': ''
    }
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
    getResults: function (state) {
      return state.results
    },
    getInfos: function (state) {
      return state.infos
    },
    getSnackbar (state) {
      return state.newSnack
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
    setResults (state, value) {
      state.results = value
    },
    setInfos (state, value) {
      state.infos = value
    },
    setSnackBar (state, newSnack) {
      state.newSnack.type = newSnack.type
      state.newSnack.text = newSnack.text
    },
  },
  actions: {
    setVerboLing ({commit}, content) {
      commit('setVerboLing', content)
    },
    setLogiqueMath ({commit}, content) {
      commit('setLogiqueMath', content)
    },
    setVisioSpatiale ({commit}, content) {
      commit('setVisioSpatiale', content)
    },
    setInterperso ({commit}, content) {
      commit('setInterperso', content)
    },
    setIntraperso ({commit}, content) {
      commit('setIntraperso', content)
    },
    setCorpoKine ({commit}, content) {
      commit('setCorpoKine', content)
    },
    setMusicale ({commit}, content) {
      commit('setMusicale', content)
    },
    setNaturaliste ({commit}, content) {
      commit('setNaturaliste', content)
    },
    setResults ({commit}, content) {
      commit('setResults', content)
    },
    setInfos ({commit}, content) {
      commit('setInfos', content)
    },
    setSnackBar ({commit}, newState) {
      commit('setSnackBar', newState)
    },
  },
  modules: {}
})
