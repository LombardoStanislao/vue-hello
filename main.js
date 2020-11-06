var app = new Vue({

  el: '#root',

  data: {

    hello: 'Hello World',
    colorTitle: 'green',
    firstPic: 'hello.jpeg',
    secondPic: 'royal.jpg',
    thirdPic: 'pier.jpg',
    imgDisplayed: 'active',
    imgNone: 'none'
  },
  methods: {

    changePics: function() {

        if (this.firstPic == 'hello.jpeg') {
          this.firstPic = this.secondPic;
        }

        if (this.firstPic == 'royal.jpg') {
          this.firstPic = this.thirdPic;
        };

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
