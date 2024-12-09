(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }
   
    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor(
            {id, type}: HtmlElementProps
        ) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value: string;
        placeholder: string;
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;

        constructor(
           {value, placeholder}: InputAttributesProps
        ) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }


    interface InputElementProps {
        id: string;
        value: string;
        placeholder: string;
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public attributes: InputAttributes;

        constructor(
            {value,
            placeholder,
            id,} : InputElementProps
        ) {
            this.htmlElement = new HtmlElement({id, type: 'input'});
            this.attributes = new InputAttributes({value, placeholder});
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    const nameField = new InputElement({
        value: 'Fernando', 
        placeholder: 'Enter first name', 
        id: 'txtName'
    });

    //solucion 2 sin cambiar la forma en que recibe los parametros y manteniendo 3 clases

    /* class InputEvents {
        constructor( ) {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    } */

    /* class InputElement {
        public htmlElement: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(
            public id: string,
            public value: string,
            public placeholder: string
        ) {
            this.htmlElement = new HtmlElement({id, type: 'input'});
            this.attributes = new InputAttributes({value, placeholder});
            this.events = new InputEvents();
        }

    } */

    /* const nameField = new InputElement('Fernando', 'Enter first name', 'txtName'); */

    console.log({ nameField });

})()