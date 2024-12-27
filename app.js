var ageF = function (birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    if (birthDate.getMonth() > today.getMonth()) {
        age = age - 1;
    }
    else {
        if ((birthDate.getMonth() === today.getMonth()) && (birthDate.getDate() > today.getDate())) {
            age = age - 1;
        }
    }
    return age;
};
var birthDate = new Date("2004-02-19T04:00:00");
var ageY = ageF(birthDate);
console.log("Fecha de Nacimiento ".concat(birthDate, " por lo tanto su EDAD es ").concat(ageY, " a\u00F1os"));
