const ageF = (birthDate:Date) :number => {
    const today:Date = new Date();
    let   age:number = today.getFullYear() - birthDate.getFullYear();
    if (birthDate.getMonth() > today.getMonth()) {
        age = age - 1;
    }else{
        if ((birthDate.getMonth() === today.getMonth())  && (birthDate.getDate() > today.getDate())){
            age = age - 1;
        }
    } 
    return age;
}
const birthDate:Date = new Date("2004-02-19T04:00:00");
const ageY:number    = ageF(birthDate);
console.log(`Fecha de Nacimiento ${birthDate} por lo tanto su EDAD es ${ageY} años`);