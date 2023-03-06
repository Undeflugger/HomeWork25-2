// Створити класс Person class з властивостями name, age, і occupation.
//     Створити в Person метод introduction котрий повертає текст "Hi, my name is John. I'm 25 years old and I work as a software engineer."
// Створіть класс Form котрий в конструкторі очікує html форму.
//     В Form створіть метод handleSubmit котрий дістає значення з полів форми, та створією нового представника класу Person , і виводить представлення себе( introduction) в DOM.
//     Коли по html формі відбувся submit подія викликайте метод handleSubmit
// Форма повинна мати поля name, age, і occupation, та кнопку підтвердження.
//     Усі поля обов'язкові до заповнення, мінімальна довжина імені 10 символів,
// Після успішного додавання користувача форма повинна очиститись і знову бути готова до роботи

"use strict"

class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    introduction(){
        return `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`
    }
}

class Form {
    arr = [];
    constructor(form) {
        this.form = form;
    }
    handleSubmit(){
        for(let i = 0; i < this.form.length - 1; i++){
            this.arr.push(this.form[i].value);
        }
        let newPerson  = new Person(...this.arr);
        const info = document.getElementById('info');
        info.innerText = newPerson.introduction(...this.arr);
        this.form.reset();
        this.arr = [];
    }
}

const form = new Form(document.forms[0]);


document.getElementsByTagName('form')[0].addEventListener('submit', event => {
    event.preventDefault();
    form.handleSubmit();
})
