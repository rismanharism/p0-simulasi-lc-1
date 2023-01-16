let row = 5

// your code here

for (let i = 1; i <= row; i++) {
    let rowString = "";
    for (let j = (i-1)*3 + 1; j <= i*3; j++) {
        rowString += j + " ";
    }
    console.log(rowString);
}

