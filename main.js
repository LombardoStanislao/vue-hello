var listaImmagini = ['hello.jpeg', 'royal.jpg', 'pier.jpg'];
var indiceImmagine = 0;

var app = new Vue({

  el: '#root',

  data: {
    hello: 'Hello World',
    colorTitle: 'green',
    imgSrc: listaImmagini[0],
  },
  methods: {

    changePics: function() {


        indiceImmagine++;

        if (indiceImmagine == listaImmagini.length) {

          indiceImmagine = 0;
        }

        console.log(listaImmagini[indiceImmagine]);

        this.imgSrc = listaImmagini[indiceImmagine];

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
