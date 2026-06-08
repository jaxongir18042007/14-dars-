tugma.onclick = () => {
    // Foydalanuvchi yozgan matnni kichik harfga o'tkazib olish (moslashuvchanlik uchun)
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
kuntun.onclick = () =>{
    document.querySelector('.asosiyquti').classList.toggle('keyin');
}