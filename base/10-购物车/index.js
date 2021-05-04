const app = new Vue({
  el: "#app",
  data: {
    empty:'购物车为空',
    books: [
      {
        id: 1,
        name: 'xxx',
        price: 10.9,
        date: '2021-09-09',
        count: 1
      },
      {
        id: 2,
        name: 'yyy',
        price: 18.3,
        date: '2020-09-09',
        count: 1
      },
      {
        id: 3,
        name: 'zzz',
        price: 15.2,
        date: '2020-01-09',
        count: 1
      },
      {
        id: 4,
        name: 'www',
        price: 11.9,
        date: '2011-01-09',
        count: 1
      },

    ]
  },
  methods: {
    add(index) {
      this.books[index].count++
    },
    sub(index) {
      if (this.books[index].count > 0) {
        this.books[index].count--
      }
    },
    handleRemove(index) {
      this.books.splice(index, 1)
    },
    isEmpty() {
      return false
    }

  },
  filters: {
    showPrice(value) {
      return '$' + value.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      debugger
      let total = 0

      // for(i=0;i<this.books.length;i++){
      //   total+=this.books[i].price*this.books[i].count
      // }

      // for(i in this.books){
      //   total+=this.books[i].price*this.books[i].count
      // }

      // for(book of this.books){
      //   total+=book.price*book.count
      // }

      total=this.books.reduce((pre,book)=> {return pre+book.price*book.count},0)

      return total
    }
  }
})
