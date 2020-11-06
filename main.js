var app = new Vue({

  el: '#root',

  data: {

    hello: 'Hello World',
    colorTitle: 'green',
    firstPic: 'hello.jpeg',
    secondPic: 'royal.jpg',
    thirdPic: 'pier.jpg'

  },
  methods: {

    changePics: function() {

        return this.firstPic = 'pier.jpg'
        console.log('prova');

    },

    changeColor: function() {

      if (this.colorTitle == 'green') {

        return this.colorTitle = 'coral';

      } else {

        return this.colorTitle = 'green';

      }

    }

  }

});
