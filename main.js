var app = new Vue({

  el: '#root',

  data: {

    hello: 'Hello World',
    colorTitle: 'green'

  },
  methods: {

    changeColor: function() {

      if (this.colorTitle == 'green') {

        return this.colorTitle = 'coral';

      } else {

        return this.colorTitle = 'green';

      }



    }

  }

});
