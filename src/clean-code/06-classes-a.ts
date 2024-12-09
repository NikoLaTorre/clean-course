(() => {
    //a mejorar
    
    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string, 
            public age: number,
            public gender: Gender
        ) {}
    }

    class User extends Person {
        constructor(
            public password: string,
            public email: string,
            name: string, 
            age: number,
            gender: Gender
        ) {
            super(name, age, gender);
        }

        checkCredentials() {
            return this.password === '123456' && this.email === 'user@example.com';
        }
    }

    class UserSettings extends User {
        constructor(
            public isAdmin: boolean,
            public workingDirectory: boolean,
            password: string,
            email: string,
            name: string, 
            age: number,
            gender: Gender
        ) {
            super(password, email, name, age, gender);
        }
    }
})();