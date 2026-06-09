tugma.onclick = () => {
    const qiymat = fortext.value.toLowerCase();

    if (qiymat === "toshkent") {
        rasm.src = "toshkent.jpg";
    } else if (qiymat === "newyork") {
        rasm.src = "amerika.jpg";
    } else if (qiymat === "moskva") {
        rasm.src = "russian.jpg";
    } else if (qiymat === "germanya") {
        rasm.src = "germany.jpg";
    } else if (qiymat === "istanbul") {
        rasm.src = "turkey.jpg";
    } else {
        alert("Bunday joy topilmadi");
    }
}
box2.onclick = () =>{
    rasm.src = "toshkent.jpg";
}
box3.onclick = () =>{
    rasm.src = "amerika.jpg";
}
box4.onclick = () =>{
    rasm.src = "russian.jpg";
}
box5.onclick = () =>{
    rasm.src = "germany.jpg";
}
box6.onclick = () =>{
    rasm.src = "turkey.jpg";
}
kuntun.onclick = () => {
    document.querySelector('.asosiyquti').classList.toggle('keyin1');
    document.querySelector('#markaziyquti').classList.toggle('keyin2');
    document.querySelector('#fortext').classList.toggle('keyin3');
    document.querySelector('#kuntun').classList.toggle('keyin4');
    document.querySelector('#tugma').classList.toggle('keyin5');
    document.querySelector('#royhatlar').classList.toggle('keyin6');
    document.querySelector('#box1').classList.toggle('keyin7');
    document.querySelector('#box2').classList.toggle('keyin8');
    document.querySelector('#box3').classList.toggle('keyin9');
    document.querySelector('#box4').classList.toggle('keyin10');
    document.querySelector('#box5').classList.toggle('keyin11');
    document.querySelector('#box6').classList.toggle('keyin12');
    document.querySelector('#rasm').classList.toggle('keyin13');
    document.querySelector('body').classList.toggle('keyin14');
    document.querySelector('#pastkichiziq').classList.toggle('keyin15');
}

