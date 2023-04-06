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
const today = new Date();

function handleSubmit(e) {
    e.preventDefault();
}

function userDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date
}

errorMsg = {
    dayEerror1: function() {
        dayEerror.innerHTML = 'This field is requiered'
        txtborderColorRed()
    },
    dayEerror2: function() {
        dayEerror.innerHTML = 'Must be a valid day'
        txtborderColorRed()
    },
    dayEerror3: function() {
        dayEerror.innerHTML = 'Must be in the past'
        txtborderColorRed()
    },
    monthEerror1: function() {
        monthEerror.innerHTML = 'This field is requiered'
        txtborderColorRed()
    },
    monthEerror2: function() {
        monthEerror.innerHTML = 'Must be a valid day '
        txtborderColorRed()
    },
    monthEerror3: function() {
        monthEerror.innerHTML = 'Must be in the past'
        txtborderColorRed()
    },
    yearEerror1: function() {
        yearEerror.innerHTML = 'This field is requiered'
        txtborderColorRed()
    },
    yearEerror2: function() {
        yearEerror.innerHTML = 'Must be a valid day'
        txtborderColorRed()
    },
    yearEerror3: function() {
        yearEerror.innerHTML = 'Must be in the past'
        txtborderColorRed()
    }


}



function txtborderColorRed() {
    dayInput.style.borderColor = 'red'
    monthInput.style.borderColor = '#dc2626';
    yearInput.style.borderColor = '#dc2626';
    dayTxt.style.color = '#dc2626';
    monthTxt.style.color = '#dc2626';
    yearTxt.style.color = '#dc2626';
}

function isValidDate(inputDay, inputMonth, inputYear) {
    const day = parseInt(inputDay)
    const month = parseInt(inputMonth)
    const year = parseInt(inputYear)
    if (month < 1 || month > 12) {
        return false;
    }
    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
}

btn.addEventListener('click', () => {
    if (isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        dayEerror.innerHTML = ''
        monthEerror.innerHTML = ''
        yearEerror.innerHTML = ''
        dayValue.innerHTML = '--'
        monthValue.innerHTML = '--'
        yearValue.innerHTML = '--'
        dayInput.style.borderColor = '#6b7280'
        monthInput.style.borderColor = '#6b7280';
        yearInput.style.borderColor = '#6b7280';
        dayTxt.style.color = '#6b7280'
        monthTxt.style.color = '#6b7280';
        yearTxt.style.color = '#6b7280';
    }
    if (dayInput.value < 1) {
        errorMsg.dayEerror1();
    } else if (dayInput.value > 0 && !isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        errorMsg.dayEerror2();
    } else if (today < userDate(dayInput.value, monthInput.value, yearInput.value)) {
        errorMsg.dayEerror3();
    }
    if (monthInput.value < 1) {
        errorMsg.monthEerror1();
    } else if (monthInput.value > 12) {
        errorMsg.monthEerror2();
    } else if (!isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        errorMsg.monthEerror2();
    } else if (today < userDate(dayInput.value, monthInput.value, yearInput.value)) {
        errorMsg.monthEerror3();
    }
    if (yearInput.value < 1) {
        errorMsg.yearEerror1();
    } else if (!isValidDate(dayInput.value, monthInput.value, yearInput.value)) {
        errorMsg.yearEerror2();
    } else if (today < userDate(dayInput.value, monthInput.value, yearInput.value)) {
        errorMsg.yearEerror3();
    } else {
        age = today - userDate(dayInput.value, monthInput.value, yearInput.value)

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