(() => {
    //a mejorar
    
    type Gender = 'M' | 'F';

    interface PersonProps {
        age: number,
        gender: Gender
        name: string, 
    }

    class Person {
        public age: number; 
        public gender: Gender;
        public name: string;

        constructor( { name, age, gender }: PersonProps ) {
            this.age = age;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        password: string,
        email: string,
        age: number,
        gender: Gender,
        name: string
    }

    class User extends Person {
        public password: string;
        public email: string;

        constructor( {password, email, name, age, gender} : UserProps ) {
            super({name, age, gender});
            this.password = password;
            this.email = email;
        }

        checkCredentials() {
            return this.password === '123456' && this.email === 'user@example.com';
        }
    }

    interface UserSettingsProps {
        password: string,
        email: string,
        age: number,
        gender: Gender,
        name: string
        isAdmin: boolean,
        workingDirectory: string
    }

    class UserSettings extends User {

        public isAdmin: boolean;
        public workingDirectory: string;

        constructor({password, email, name, age, gender, isAdmin, workingDirectory}: UserSettingsProps) {
            super({password, email, name, age, gender});
            this.isAdmin = isAdmin;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings({
        password: '123456',
        age: 30,
        email: 'user@example.com',
        name: 'John',
        gender: 'M',
        isAdmin: true,
        workingDirectory: 'C:\\Users\\John'
    });
})();