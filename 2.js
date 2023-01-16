let exercise = '<>^v>>>' // Isi value sesuai keinginanmu
let userInput = '<>^<><>' // Isi value sesuai keinginanmu
// Your code here

let point = 0;
for (let i = 0; i < exercise.length; i++) {
    if (exercise[i] === userInput[i]) {
        point++;
    }
}
let score = point * 10
let maxScore = exercise.length * 10
let persentase = (score / maxScore) * 100
let bulatPersentase = Math.round(persentase)
let Kategori = ""

if(exercise.length !== userInput.length){
    console.log("Input yang anda masukkan tidak lengkap!");
}

else if(bulatPersentase > 70 && bulatPersentase <= 99){
    Kategori = "Good"
    console.log(`Anda mendapatkan score ${score} / ${maxScore}. Persentase: ${bulatPersentase}%, Kategori : ${Kategori}`);
}
else if(bulatPersentase >= 100){
    Kategori = "Perfect"
    console.log(`Anda mendapatkan score ${score} / ${maxScore}. Persentase: ${bulatPersentase}%, Kategori : ${Kategori}`);
}