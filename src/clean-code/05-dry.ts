type Size = '' | 'SM' | 'M' | 'L' | 'XL' | 'XXL';

class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = ''
    ) {}

    toString() {
        if(!this.isProductReady()) return;
        
        return `${this.name} (${this.price}), ${this.size}`;
    }
    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length <= 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if (this[key] <= 0) throw new Error(`${key} is empty`);
                    break;
            }
        }
        return true
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'L');
    console.log(bluePants.toString());

})();