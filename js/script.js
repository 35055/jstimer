let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minuteNumber = document.querySelector('.minutes'),
    hourNumber = document.querySelector('.hours');

function clock() {
    let time  = new Date();
    let minutes = time.getMinutes() * 6;
    let seconds = time.getSeconds() * 6;
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` :  time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

    setTimeout(() => clock(), 1000);

}
clock();


// рекурсия это когда функция вызывает саму себя


// let i = 0;

// function rek() {
//     console.log(i);
//     if(i < 100) {
//         i++
//         setTimeout(() => rek(), 1000);
//     }
// }
// rek()


let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
console.log(link);

for(let i = 0; i < link.length;i++) {
    link[i].addEventListener('click', function(event) {
        event.preventDefault();
        for(let x = 0; x < link.length;x++) {
            link[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        this.classList.add('active');
        tabs[i].classList.add('active');
    })
}

///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////
///////// ДЗ:
let a = document.querySelector('.stopwatch__seconds');
let b = document.querySelector('.stopwatch__minutes');
let c = document.querySelector('.stopwatch__hours');
let timer;
let rar = document.querySelector('.tabsLink__span')

let but = document.querySelector('.stopwatch__btn');
but.addEventListener('click',function(){
    if(but.innerHTML == 'start'){
        function ma(){
    console.log(a.innerHTML);
    if(a.innerHTML < 59 || a.innerHTML == -1){
        a.innerHTML++;
        timer = setTimeout(() => ma(),10);
        
    }else if( a.innerHTML == 59 && b.innerHTML < 59 || b.innerHTML == -1){
        a.innerHTML = -1;
        b.innerHTML++;
        ma();
    }else if(b.innerHTML == 59){
        b.innerHTML = -1
        c.innerHTML++;
        ma();
    }
}
rar.classList.add('active');
but.innerHTML = 'stop';
but.classList.add('active');
ma();
}else if(but.innerHTML == 'stop'){
        clearTimeout(timer);        
        but.innerHTML = 'clear';
        but.classList.add('active');
        rar.classList.add('active_clear')
        
    }else if(but.innerHTML == 'clear'){
        a.innerHTML = 0;
        b.innerHTML = 0;
        c.innerHTML = 0;
        rar.classList.remove('active')
        rar.classList.remove('active_clear')

        but.innerHTML = 'start'
        but.classList.add('active')
    }
})





