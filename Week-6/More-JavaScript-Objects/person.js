var paul = {
  fname: 'Paul',
  lname: 'Bailey',
  greet: function () {
    console.log(`Hello ${this.fname} ${this.lname}`);
  }
};
var shannon = {fname: 'Shannon'};
shannon.__proto__ = paul;
shannon.greet();
