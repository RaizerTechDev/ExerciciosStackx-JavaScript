function binaryToDecimal (binaryNumber) { //função binario para decimal

    let decimalNumber = 0;
    const bitsCount = binaryNumber.length;

    for(let i=0; i<bitsCount; i++) {
        let position = bitsCount -1 -i;
        let basePower = 2**i;
        decimalNumber += binaryNumber[position] * basePower;      

    } 
     return decimalNumber;     
}
console.log("Retorna Decimal=", binaryToDecimal("101")); //Retorna decimal 5
console.log("Retorna Decimal=", binaryToDecimal("1000")); //Retorna decimal 8

