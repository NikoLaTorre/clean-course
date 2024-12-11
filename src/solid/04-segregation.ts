interface Bird {
    eat(): void;
}

interface FlyingBird extends Bird {
    fly(): void;
}

interface SwimmingBird extends Bird {
    swim(): void;
}

interface RunningBird extends Bird {
    run(): void;
}

class Eagle implements FlyingBird {
    public fly() {
        console.log('Eagle fly');
    }
    public eat() {
        console.log('Eagle eat');
    }
}

class Toucan implements FlyingBird {
    public fly() {
        console.log('Toucan fly');
    }
    public eat() {
        console.log('Toucan eat');
    }
}

class Ostrich implements RunningBird {
    public run(): void {
        console.log('Ostrich run');
    }
    public eat() {
        console.log('Ostrich eat');
    }
}

class Penguin implements SwimmingBird {
    public eat() {
        console.log('Penguin eat');
    }
    public swim() {
        console.log('Penguin swim');
    }
}

