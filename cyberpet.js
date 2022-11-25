
alert("Create your Virtual Pet")
class Pet {
    constructor(bored,feed,water,hungry,thirsty,happiness) {
        this.bored = bored; //starts at 0
        this.feed = feed; //starts at 0
        this.water = water; //starts at 0
        this.hungry = hungry; //Feed Petnode
        this.thirsty = thirsty; //Water Pet
        this.happiness = happiness; //increases happiness
    }
    Play() {
       if ((this.bored + this.happiness) <= PET_HAPPY) {
            this.bored += this.happiness;
        } else {
            this.happiness = PET_HAPPY;
        };
    }
    feed() {
        if ((this.hungry + this.feed) <= PET_FULL) {
             this.hungry += this.feed;
         } else {
             this.feed = PET_FULL;
         };
     }
     water() {
        if ((this.thirsty + this.water) <= PET_HYDRATED) {
             this.thirsty += this.water;
         } else {
             this.feed = PET_HYDRATED;
         };
     }
}
class Dog extends Pet {
    constructor(bored,feed,water,hungry,thirsty,happiness) {
        super(bored,feed,water,hungry,thirsty,happiness);
    }
}
class Rabbit extends Pet {
    constructor(bored,feed,water,hungry,thirsty,happiness) {
        super(bored,feed,water,hungry,thirsty,happiness);
    }
}
class Cat extends Pet {
    constructor(name,bored,feed,water,hungry,thirsty,happiness) {
        super(name,bored,feed,water,hungry,thirsty,happiness);
    }
}
    SelectedPet(PetsSelected, Petname)
        let pet;
        switch (typeOfPet) {
            case "bunny":
                pet = new Bunny(Petname,bored,feed,water,hungry,thirsty,happiness );
                break;
            case "dog":
                pet = new Dog(Petname,bored,feed,water,hungry,thirsty,happiness);
                break;
            case "cat":
                pet = new Cat(Petname,bored,feed,water,hungry,thirsty,happiness);
                break;
            default:
                console.log('Sorry this Pet is not available');
                return;
        }
        console.log(this.pets.push(pet));
        