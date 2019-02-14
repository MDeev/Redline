import Vue from 'vue'
import App from './App.vue'
import router from './router'

// jquery
import $ from 'jquery'
global.$ = $

// Bootstrap
import 'bootstrap'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'
// import 'bootstrap/scss/bootstrap.scss'

// FontAwesome
import '@/assets/css/all.min.css'

// Main JS
import '@/assets/js/index'

// Using axios
import axios from 'axios'
Vue.prototype.$http = axios

// if you'd like to use Vue resource follow this steps bellow
// 1 -> type in you command line oe powershell this commend (without "")  npm i --save vue-resource
// 2 -> delete anti slashs // in the next 2 lines
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

Vue.config.productionTip = false

// Short paragraphe filter
Vue.filter('shortPara', function(p){
  return p.slice(0, 65) + ' ...';
});

// Mixins
Vue.mixin({
  data(){
    return {
      blogData: [],
      latestBlogs: [],
      popularBlogs: [],
      theBlog: [],
      notExist: false,
      loading: false,
      users: ['Jared Lawson', 'Richard Caldwell', 'Elias Shaw', 'Joyce Sullivan', 'Jason Massey', 'Fernando Adkins', 'Margarita Peters', 'Sheldon Brady', 'Leslie Lynch', 'Archie Nelson'],
      categories: ['Sport', 'Music', 'Movies', 'Games', 'Food', 'Art', 'Tools', 'Animals', 'Communication', 'Design', 'Education', 'Technology', 'Others']
    }
  },
  methods: {
    getRandomNumber: function(maxNumber){
      return Math.floor((Math.random() * maxNumber) + 1);
    },
    getBlogs: function(randomNumber, maxBlog, type = '') {

      this.$http.get('https://jsonplaceholder.typicode.com/posts/').then((result) => {

        this.blogData = result.data.splice(this.getRandomNumber(randomNumber), maxBlog);

        if(type === 'popular')
          this.popularBlogs = this.blogData;

        else if(type === 'latest')
          this.latestBlogs = this.blogData;

        else if(type === 'blog')
            this.theBlog = this.blogData;

        this.loading = true;
        return false;
      });
    },
    getLatestBlogs: function() {
      this.getBlogs(91, 9, 'latest');
    },
    getpopularBlogs: function() {
      this.getBlogs(93, 7, 'popular');
    },
    getSingleBlog: function() {
      this.getBlogs(97, 3, 'blog');
    },
    CheckImage: function() {
      this.notExist = true;
      while(this.notExist){
          var xhr = new XMLHttpRequest();
          var random = this.getRandomNumber(1084);
          var imgUrl = 'https://picsum.photos/720/480?image=' + random;
          xhr.open('HEAD', imgUrl, false);
          xhr.send();
          if (xhr.status == "404") {
              this.notExist = true;
              console.clear();
              continue;
          } else {
              return imgUrl;
          }
      }
    }
  },
  created: function() {
    this.getLatestBlogs();
    this.getpopularBlogs();
    this.getSingleBlog();
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#redline')
