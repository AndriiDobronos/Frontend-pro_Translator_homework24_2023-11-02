"use strict";
/*
Потрібно зробити:

    обрати 3 мови за бажанням (можна більше) та створити з них масив
наповнити 2 випадаючих списка, які містять мови з цього масиву. (1й для вибору мови,
 з якої перекладати, 2й для вибору мови, на яку перекладати)
коли користувач обирає мову у першому чи другому списку, вивести заповнену таблицю
 місяців та їх перекладів. наприклад:

Умови:

    місяці тією чи іншою мовою отримувати за допомогою методу дати toLocaleString
список мов та рядки з перекладами мають задаватися в js коді
у js коді стилі не додавати. за бажанням можна додати їх у css файлі, щоб було гарненько
у списках не повинно бути порожніх значень. тобто при запуску програми мови уже вибрані і
 таблиця заповнена
програма повинна не допускати вибрати одну і ту саму мову. якщо користувач вибирає таку
саму мову, як у іншому списку, то у іншому списку мова має змінитися на будь-яку іншу.
 наприклад, вибрані українська і англійська, користувач вибирає у другому списку українську,
  програма повинна змінити мову у першому списку на іншу, і тільки після цього показувати
   переклади


Елементи, які не розглядали:

    випадаючий список це елемент select, його можливі значення це список option
     (у нього має бути задана властивість value - значення, якому воно відповідає),
      подія, яка стається, коли змінюється вибране значення, це change. вибране значення
      це властивість value у елемента select
таблиця це елемент table, у якого рядки це елементи tr, а комірки це елементи td


Домашку можна робити поетапно, переходячи до наступного, якщо все вийшло:

    тільки додати у перший випадаючий список один будь-який елемент
додати у перший випадаючий список два будь-які елементи
додати у перший випадаючий список два будь-які елементи. коли користувач змінює
  вибраний елемент, показати йому повідомлення, в якому вказано вибраний елемент
наповнити перший випадаючий список з масиву мов
наповнити перший випадаючий список з масиву мов. коли користувач змінює вибрану мову,
 показати йому повідомлення, в якому вказано вибрану мову
наповнити обидва списка з масиву мов
наповнити обидва списка з масиву мов. коли користувач змінює вибрану мову у будь-якому
 з двох списків, показати йому повідомлення, в якому вказано вибрану мову
наповнити обидва списка з масиву мов. коли користувач змінює вибрану мову у будь-якому
 з двох списків, показати йому повідомлення, в якому вказано, чи однакові мови вибрано
наповнити обидва списка з масиву мов. коли користувач змінює вибрану мову у будь-якому
 з двох списків і якщо однакові мови вибрано, то змінити мову в іншому списку

додати до таблиці один рядок з двома комірками і будь-яким текстом всередині
у циклі додати до таблиці 12 рядків, кожен з двома комірками і числом від 0 до 11:
у циклі додати до таблиці 12 рядків, кожен з двома комірками, які містять відповідний
 місяць українською
наповнити обидва списка з масиву мов. в коді задати різні вибрані значення. далі
у циклі додати до таблиці 12 рядків, кожен з двома комірками, які містять відповідний
 місяць першою та другою вибраними мовами
Саме дз:
    наповнити обидва списка з масиву мов.
    в коді задати різні вибрані значення.
    у циклі додати до таблиці 12 рядків, кожен з двома комірками, які містять відповідний
    місяць першою та другою вибраними мовами.
    коли користувач змінює вибрану мову у будь-якому з двох списків: якщо вибрані однакові
     мови, то змінити мову в іншому списку; далі у циклі оновити таблицю, заповнивши її
     назвами місяців на вибраних мовах

 */
const languages = ["УкраЇнська","Англійська","Італійська","Німецька"]
const locale = ['ukr-UA','en-EN','IT','de-DE']
const arrErrors = []

for (let p = 0; p < languages.length ; p++) {
    if(languages[p] === "" || !isNaN(+languages[p])) {
        arrErrors.push(languages[p])
    }
    if(locale[p] === "" || !isNaN(+locale[p])) {
        arrErrors.push(locale[p])
    }
}
if (languages.length >= 2 && locale.length >= languages.length &&
arrErrors.length === 0) {

    function createAllOptions(position){
        let allOptions = ``
        for (let j = 0 ; j < languages.length ; j++) {
            let isSelected = ''
            if (j === position) {
                isSelected = 'selected'
            }
            allOptions += `<option value="${locale[j]}" ${isSelected}>${languages[j]}</option>\n`
        }
        return allOptions
    }
    const select1 = document.querySelector('.language-from')
    select1.innerHTML = createAllOptions(0)

    const select2 = document.querySelector('.language-to')
    select2.innerHTML = createAllOptions(1)

    let locale1 = 'ukr-UA'
    let locale2 = 'en-EN'
    function createTable() {
        let allTr = ''
        for (let k = 0; k < 12 ; k++) {
            const date = new Date(Date.UTC(2022, k));
            const options = {month: 'long'};
            allTr += ` <tr>\n` +
                `            <td>${date.toLocaleString(locale1, options)}</td>\n` +
                `            <td>${date.toLocaleString(locale2, options)}</td>\n` +
                `          </tr>\n `
        }
        const table = document.querySelector('.months-translates')
        table.innerHTML = allTr
    }
    createTable()

    select1.onchange = function() {
        for (let i = 0; i < languages.length; i++) {
            if (select1[i].selected) {
                locale1 = select1[i].value
                if(locale1 === locale2 && i < (languages.length - 1)) {
                    select2[i].selected = false
                    select2[i+1].selected = true
                    locale2 = select1[i+1].value
                }else if(locale1 === locale2 && i === (languages.length - 1)) {
                    select2[i].selected = false
                    select2[i-1].selected = true
                    locale2 = select2[i-1].value
                }
            }
        }
        createTable()
    }

    select2.addEventListener('change',function () {
        for (let l = 0; l < languages.length; l++) {
            if (select2[l].selected){
                locale2 = select2[l].value
                if(locale1 === locale2 && l < (languages.length - 1)) {
                    select1[l].selected = false
                    select1[l+1].selected = true
                    locale1 = select1[l+1].value
                }else if(locale1 === locale2 && l === (languages.length - 1)){
                    select1[l].selected = false
                    select1[l-1].selected = true
                    locale1 = select1[l-1].value
                }
            }
        }
        createTable()
    })
} else {
    alert('Inputted data is invalid')
}






