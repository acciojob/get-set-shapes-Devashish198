//complete this code
class Rectangle {
	constructor(width,height){
		this.w=width;
		this.h=height;
	}
	get height(){
			return this.h;
	}
	get width(){
		return this.w;
	}

	getArea(){
		return this.w*this.h;
	}
}

class Square extends Animal {
	constructor(side){
		super(side,side)
	}

	getPerimeter(){
		return 4*this.side
	}

	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
