

const showClock = ()=>{
    let date = new Date();
    let hr = formatHour(date.getHours());
    let min = formatHour(date.getMinutes());
    let sec = formatHour(date.getSeconds());
    document.getElementById('hour').innerText = `${hr}:${min}:${sec}`;

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Oct', 'Nov', 'Dec'];
    const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let daysweek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let datextext = `${daysweek}, ${day} ${month}`;
    document.getElementById('date').innerText = datextext;

    document.getElementById('container').classList.toggle('animated')
}

const formatHour = (hour)=>{
    if (hour < 10)
        hour = '0' + hour;
    return hour;
}

setInterval(showClock, 1000);
