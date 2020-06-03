first:https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript?fbclid=IwAR1UfrOWsMVDjqAt46HDJSCwpifZ-Hl1Cni0OoBejRk1_c9EQ8QQyO-6QFg

class SmallestIntegerFinder {
  findSmallestInt(args) {
      return Math.min(...args);
  }
}

second:https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR3PhXqEEkJi4OuBicUJbtxgxRxyZC4Vzhxe8h2mQl9Wn8XNs16dGUpLKxM
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

third:https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.codewars.com%2Fkata%2Ffun-with-es6-classes-number-2-animals-and-inheritance%2Ftrain%2Fjavascript%3Ffbclid%3DIwAR3d2sBlheFqN2T0cn1XeyhrGZhV3gv6XXwtZrJHl8ShHKX4uPfDNNmXR88&h=AT2suazPYYJ2EsDcPbXs_Dzbbf_rS3ZnsNLFFV3xiqMrTBMgKpcPt877fwNCTAbiwY7RSQjkoa-hokHYzavVx8NQ74xnpaBqgfn6VhCDaQn8UQsIAE7Lv1lH8mW0_fgL1V1g&__tn__=-UK-R&c[0]=AT1JnNoAIZPFKy1IDh4TP3WDFWpeGz7s5ZECfnVCGz5J5xJslSEqSy7gE2aNGlVhcUoqpRgpGM_RdErA-rAPB9F8bcOlWu4urdwgyfNo4w8OrETnPANmrVpP5TN6I-0iD-BGM54AAewthUzDbydUVRddRvGXbAdvWyBlBt_HzK6j06UhNVCYLQ

class Dog extends Animal {
  constructor(name, age, status,master){
     super(name, age, 4,"dog", status );
     this.master = master;
  }
  greetMaster(){
    return `Hello ${ this.master}`;
   }
}
    
fourth:https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript?fbclid=IwAR089-enzMLN_DFZHXTDvxP9ngqngFyqxM8Xd2nxhUS39sq8opaTHrNIK3Y
function giveMeFive(obj) {
	let five = [];
	for(let key in obj) {
		if(key.length == 5) five.push(key);
		if(obj[key].length == 5) five.push(obj[key]);
	}
	return five;
}
