class Square {
  constructor(){
    this.squareElement = null;
    this.size = null;
    this.color = null;
    this.position = {};
    this.minSize = 10;
    this.maxSize = 100;

    this.setRandomProperties()
  }

  setRandomProperties(){
    this.size = this.randomizeSize( this.minSize, this.maxSize );
    this.color = this.randomizeColor();
    this.position = this.randomizePosition();

  }

  randomizeColor(){
    var randomRGB = "";
    var rgbArray = [];
    for (var iArrayBuild = 0; iArrayBuild < 3; iArrayBuild++) {
      rgbArray[iArrayBuild] = Math.floor(Math.random() * 256);
    }
    // choosing a color to be at full 255; 0 = red, 1 = green, 2 = blue
    var randomPosition = Math.floor(Math.random() * 3);
    rgbArray.splice(randomPosition, 1, 255);

    randomRGB = "rgb(" + rgbArray.toString() + ")";
    return randomRGB;
  }

  randomizePosition(){
    //random top - the max possible size of the square
    var randomTop = Math.floor(Math.random() * (window.innerHeight - 110) + 1);
    var randomLeft = Math.floor(Math.random() * (window.innerWidth - 110) + 1);

    var randomPosition = {top: randomTop, left: randomLeft};
    return randomPosition;
  }

  randomizeSize( randomMin, randomMax ){

    var randomSize = Math.floor(Math.random() * (randomMax - randomMin) + randomMin)
    return randomSize;
  }

  render(){
    var newSquareElement = $("<div>");
    newSquareElement.addClass("square");
    newSquareElement.css({
      "background-color" : this.color ,
      "width" : this.size ,
      "height" : this.size
    }).position(this.position)
  }
}
