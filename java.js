tugma.onclick = () => {
    // Foydalanuvchi yozgan matnni kichik harfga o'tkazib olish (moslashuvchanlik uchun)
    const qiymat = fortext.value.toLowerCase();

    if (qiymat === "toshkent") {
        rasm.src = "toshkent.jpg";
    } else if (qiymat === "newyork") {
        rasm.src = "amerika.jpg";
    } else if (qiymat === "moskva") {
        rasm.src = "russian.jpg";
    } else if (qiymat === "germany") {
        rasm.src = "germany.jpg";
    } else if (qiymat === "istanbul") {
        rasm.src = "turkey.jpg";
    } else {
        alert("Bunday joy topilmadi");
    }
}