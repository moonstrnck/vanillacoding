console.log("hello, vanilla.");

const d = new Date();
const td = document.querySelectorAll('tbody td');
const date = document.querySelectorAll('.current-day p');
const month = document.querySelector('.current-month');

const days = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
]

const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
]

let c = {
    today: d.getDate(),
    currentMonth: d.getMonth(),
    currentYear: d.getFullYear(),
    currentDay: d.getDay(),
    totalDays: new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(),
};

function renderCalendar(c, target) {
    td.forEach(function(td){
        td.textContent = "";
        td.style.backgroundColor = "";
    })
    if (!target) {
        c.firstIndex = c.today - (c.currentDay + 1) > 7 ? 
        7 - (c.today - (c.currentDay + 1) % 7) 
        : 7 - (c.today - (c.currentDay + 1));
        c.lastIndex = c.firstIndex + c.totalDays;
    } else if (target.classList.contains('prev')){
        c.lastIndex = td.length - (7 - c.firstIndex);
        c.firstIndex = c.lastIndex - c.totalDays;
        if (c.firstIndex > 6) {
            c.firstIndex -= 7;
            c.lastIndex -= 7;
        }
        
    } else {
        c.firstIndex = c.lastIndex % 7;
        c.lastIndex = c.firstIndex + c.totalDays;

    }
    let n = 1;
    for (let i = c.firstIndex; i < c.lastIndex; i++) {
        td[i].textContent = n;
        n++;
    }
    
    month.textContent = `${months[c.currentMonth]} ${c.currentYear}`;
    if (d.getFullYear() === c.currentYear && d.getMonth() === c.currentMonth) {
        date[0].textContent = days[c.currentDay];
        date[1].textContent = c.today;
        td[c.today].style.backgroundColor = "lemonchiffon";
    }else {
        date[0].textContent = days[c.firstIndex];
        date[1].textContent = td[c.firstIndex].innerText;
    }

}


renderCalendar(c);

const prev = document.querySelector('.button.prev');
const next = document.querySelector('.button.next');

prev.addEventListener("click", function(event){
    const target = event.target;
    if (c.currentMonth === 0) {
        c.currentYear -= 1;
        c.currentMonth = 11;
    }else {
        c.currentMonth -= 1;
    }
    c.totalDays = new Date(c.currentYear,  c.currentMonth + 1, 0).getDate();
    console.log(c.currentMonth, c.currentYear, c.totalDays, c.firstIndex)
    if (c.currentYear < 1) return;
    renderCalendar(c, target);
});
next.addEventListener("click", function(event){
    if (c.currentMonth === 11){
        c.currentYear += 1;
        c.currentMonth = 0;
    }else {
        c.currentMonth += 1;
    }
    c.totalDays = new Date(c.currentYear,  c.currentMonth + 1, 0).getDate();
    console.log(c.currentMonth, c.currentYear, c.totalDays, c.firstIndex)
    const target = event.target;
    renderCalendar(c, target);
});

td.forEach(function(td, i){
    td.addEventListener("click", function(){
        date[0].textContent = days[i % 7];
        date[1].textContent = td.innerText;
    })
})