class Particle {
  speed = 1;

// Constructor runs when a new particle is created
constructor(position) { 
  this.position = position; // console: new Particle(0);
  // instance property
}

// Prototype method (shared by all particles) :
move() {
  this.position += this.speed;
  this.speed += 1;
  console.log("Position:", this.position, "Speed:", this.speed);
}
}

let particle1 = new Particle(0);
let particle2 = new Particle(10);
let particle100 = new Particle(99);

particle1.move();
particle1.move();
particle2.move();
particle2.move();
particle99.move();
particle99.move();