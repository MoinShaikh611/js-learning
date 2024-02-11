function calculate(arr,logic){
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        output.push(logic(element))
    }
    return output;
}

function areaOfCircle(radius){
    return Math.PI * radius * radius;
}
let arr =[1,2,3,4]
let result1 = calculate(arr,areaOfCircle);
console.log(result1);

// another way to write is Polyfill
Array.prototype.calculate = (logic) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        output.push(logic(element));
    }
    return output;
}

let result = arr.calculate(areaOfCircle)
console.log(result);