const obj = {
  name: "Іван",
  printName: function() {
    const arrowFunc = () => {
      console.log(this.name);
    };
    arrowFunc();
  }
};

obj.printName(); // Що буде виведено?
