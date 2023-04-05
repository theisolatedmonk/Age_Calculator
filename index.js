const dayTxt = document.getElementById('day-txt');
const monthTxt = document.getElementById('month-txt');
const yearTxt = document.getElementById('year-txt');

const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

const dayEerror = document.getElementById('day-error');
const monthEerror = document.getElementById('month-error');
const yearEerror = document.getElementById('year-error');

const btn = document.getElementById('btn');

const dayValue = document.getElementById('day-value');
const monthValue = document.getElementById('month-value');
const yearValue = document.getElementById('year-value');


const day = parseInt(dayInput.value)
const month = parseInt(monthInput.value)
const year = parseInt(yearInput.value)

function userDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date
}

const today = new Date();

console.log(today.getFullYear(), today.getMonth() + 1, today.getDate());

function txtborderColorRed() {
    dayInput.style.borderColor = 'red'
    monthInput.style.borderColor = 'red';
    yearInput.style.borderColor = 'red';

    dayTxt.style.color = 'red';
    monthTxt.style.color = 'red';
    yearTxt.style.color = 'red';

}

function isValidDate(inputDay, inputMonth, inputYear) {
    const day = parseInt(inputDay)
    const month = parseInt(inputMonth)
    const year = parseInt(inputYear)

    // Check if the month is valid
    if (month < 1 || month > 12) {
        return false;
    }

    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
}


btn.addEventListener('click', () => {

    if (isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        // dayEerror.classList.add('!flex', '!text-green-400', '!text-2xl');
        dayEerror.innerHTML = ' '
        monthEerror.innerHTML = ' '
        yearEerror.innerHTML = ' '



    }
    if (dayInput.value < 1) {
        dayEerror.classList.add('!flex');
        dayEerror.innerHTML = 'This field is requiered'

        txtborderColorRed()

    } else if (dayInput.value > 0 && !isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        // console.log('btn click day')

        console.log(typeof monthInput.value)
        dayEerror.classList.add('!flex');
        dayEerror.innerHTML = 'Must be a valid day '
        txtborderColorRed()
    } else if (today < userDate(dayInput.value, monthInput.value, yearInput.value)) {
        console.log('wrokingday')
        dayEerror.classList.add('!flex');
        dayEerror.innerHTML = 'Must be in the past'
        txtborderColorRed()
    }
    if (monthInput.value < 1) {
        monthEerror.classList.add('!flex');
        monthEerror.innerHTML = 'This field is requiered'
        txtborderColorRed()
    } else if (monthInput.value > 12) {
        monthEerror.classList.add('!flex');
        monthEerror.innerHTML = 'Must be a valid month'
        txtborderColorRed()
    } else if (!isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        monthEerror.classList.add('!flex');
        monthEerror.innerHTML = 'Must be a valid month'
        txtborderColorRed()
    } else if (today < userDate(dayInput.value, monthInput.value, yearInput.value)) {
        console.log('wroking')
        monthEerror.classList.add('!flex');
        monthEerror.innerHTML = 'Must be in the past'
        txtborderColorRed()
    }
    if (yearInput.value < 1) {
        yearEerror.classList.add('!flex');
        txtborderColorRed()
    } else if (!isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        yearEerror.classList.add('!flex');
        yearEerror.innerHTML = 'Must be a valid year'

        txtborderColorRed()
    } else if (today < userDate(dayInput.value, monthInput.value, yearInput.value)) {
        console.log('wroking')
        yearEerror.classList.add('!flex');
        yearEerror.innerHTML = 'Must be in the past'
        txtborderColorRed()
    } else {
        age = today - userDate(dayInput.value, monthInput.value, yearInput.value)
        console.log('age', age)

        function msToYearsMonthsDays(age) {
            const totalDays = Math.floor(age / (1000 * 60 * 60 * 24));

            let years = Math.floor(totalDays / 365);
            let months = Math.floor((totalDays % 365) / 30);

            let days = totalDays - (years * 365) - (months * 30);
            if (days < 0) {
                months--;
                days += 30;
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            return { days, years, months };

        }
        yearValue.innerHTML = msToYearsMonthsDays(age).days

        monthValue.innerHTML = msToYearsMonthsDays(age).months
        dayValue.innerHTML = msToYearsMonthsDays(age).years

    }


});

// function msToYearsMonthsDays(age) {
//     const totalDays = Math.floor(ms / (1000 * 60 * 60 * 24));

//     let years = Math.floor(totalDays / 365);
//     let months = Math.floor((totalDays % 365) / 30);

//     let days = totalDays - (years * 365) - (months * 30);
//     if (days < 0) {
//       months--;
//       days += 30;
//     }
//     if (months < 0) {
//       years--;
//       months += 12;
//     }

//     return { years, months, days };
//   }

//   // Example usage
//   const ms = 1000000000000;
//   const diff = msToYearsMonthsDays(ms);
//   console.log(`Years: ${diff.years}`);
//   console.log(`Months: ${diff.months}`);
//   console.log(`Days: ${diff.days}`);


// age = today - userDate(dayInput.value, monthInput.value, yearInput.value)
// console.log('age', age)

// today.getFullYear(), today.getMonth() + 1, today.getDate()

// const today = new Date();
// const day1 = today.getDate();
// const month1 = today.getMonth() + 1; // Note: month starts from 0
// const year1 = today.getFullYear()

// dayEerror.classList.add('!flex');
// monthEerror.classList.add('!flex');
// yearEerror.classList.add('!flex');


// (day == '' && month == '' && year == '')


// age = today - userDate(dayInput.value, monthInput.value, yearInput.value)
// console.log('age', age)

// function msToYearsMonthsDays(age) {
//     const totalDays = Math.floor(age / (1000 * 60 * 60 * 24));

//     let years = Math.floor(totalDays / 365);
//     let months = Math.floor((totalDays % 365) / 30);

//     let days = totalDays - (years * 365) - (months * 30);
//     if (days < 0) {
//         months--;
//         days += 30;
//     }
//     if (months < 0) {
//         years--;
//         months += 12;
//     }

//     return { years, months, days };

// }
// const diff = msToYearsMonthsDays(age);
// yearValue.innerHTML = diff.years
// monthValue.innerHTML = diff.months
// dayValue.innerHTML = diff.days