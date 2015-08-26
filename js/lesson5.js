colorAll = 'lime';

var circle = {
  diameter : '150px',
  color : colorAll,
  element: document.createElement('div'),
  render: function render () {
    var el = this.element;
    el.style.height = this.diameter;
    el.style.width = this.diameter;
    el.style.background = this.color;
    el.style.borderRadius = '50%';
    el.style.position = 'absolute';
    el.style.top = '0';
    el.style.left = '0';
    console.log('Выводим круг на страницу');
    document.body.appendChild(el);
  },
  move: function move (where) {
    console.log('Двигаем круг по странице');
    var tempSize = 0;
    switch(where) {
      case 'down':
        tempSize =  parseInt(this.element.style.top, 10);
        tempSize = tempSize + 100;
        this.element.style.top = tempSize + 'px';
        break;
      case 'up':
        tempSize =  parseInt(this.element.style.top, 10);
        tempSize = tempSize - 100;
        this.element.style.top = tempSize + 'px';
        break;
      case 'left':
        tempSize =  parseInt(this.element.style.left, 10);
        tempSize = tempSize - 100;
        this.element.style.left = tempSize + 'px';
        break;
      case 'rigth':
      default:
        tempSize =  parseInt(this.element.style.left, 10);
        tempSize = tempSize + 100;
        this.element.style.left = tempSize + 'px';
    }
  },

  run: function run(arg) {
    circle.move(arg);
    setTimeout(run, 15000);
    }
  };


var rectangle = {
  height: '50px',
  width: '100px',
  color: colorAll,
  element: document.createElement('div'),
   render: function render () {
    var el = this.element;
    el.style.height = this.height;
    el.style.width = this.width;
    el.style.background = this.color;
    el.style.position = 'absolute';
    el.style.top = '0';
    el.style.left = '0';
    console.log('Выводим прямоугольник на страницу');
    document.body.appendChild(el);
  },
  move: function move (where) {
    console.log('Двигаем прямоугольник по странице');
    var tempSize = 0;
    switch(where) {
      case 'down':
        tempSize =  parseInt(this.element.style.top, 10);
        tempSize = tempSize + 100;
        this.element.style.top = tempSize + 'px';
        break;
      case 'up':
        tempSize =  parseInt(this.element.style.top, 10);
        tempSize = tempSize - 100;
        this.element.style.top = tempSize + 'px';
        break;
      case 'left':
        tempSize =  parseInt(this.element.style.left, 10);
        tempSize = tempSize - 100;
        this.element.style.left = tempSize + 'px';
        break;
      case 'rigth':
      default:
        tempSize =  parseInt(this.element.style.left, 10);
        tempSize = tempSize + 100;
        this.element.style.left = tempSize + 'px';
    }
  },

  run: function run(arg) {
    rectangle.move(arg);
    setTimeout(run, 15000);
    }
  }



circle.render();
circle.move('right');

rectangle.render();
rectangle.move('down');
rectangle.move('right');
rectangle.move('right');
rectangle.move('right');
rectangle.move('right');