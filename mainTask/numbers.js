class Operations {

    constructor( a, b ) {
        this.a = a;
        this.b = b;
    }

    sum() {
        return this.a + this.b;
    }

    sub() {
        return this.a - this.b;
    }

    mul() {
        return this.a * this.b;
    }

    div() {
        return this.a / this.b;
    }

    
}

let cls = new Operations(9999999999999999n, 9999999999999999n)
console.log(cls.sum());
console.log(cls.sub());
console.log(cls.mul());
console.log(cls.div());