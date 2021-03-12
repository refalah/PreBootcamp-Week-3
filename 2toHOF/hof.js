//////Multiplication//////
//////////////////////////


function looper(num){

    const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let text = ""
    let result

    if (num >= 1 && num <= 9){
        tenNumbers.forEach(ten => {
            result = ten * num
            text = `${num} * ${ten} = ${result}`
            console.log(text)
        })
    } else {
        console.log("No more than 9, no less than 1")
    }
}

looper(7)


//////Remove Element//////
//////////////////////////

function remove(element){
    const array1 = ["a", "b", "c", "d", "e"]
    const x = array1.filter(removeE => removeE !== element)
    console.log(x)
}


remove("d")



//////Concat Array//////
//////////////////////////


function concat(input1, input2){

    const newArray = input1.concat(input2)
    let finalArray = []

    newArray.forEach(singular => {
        if (finalArray.indexOf(singular) == -1){
            finalArray.push(singular)
        }
    });

    finalArray.sort((a,b) => a - b)

    console.log(finalArray)
}

const array1 = [1, 3, 4, 1, 5, 6, 72]
const array2 = [7, 2, 4, 1, 5, 72, 69]

concat(array1, array2)