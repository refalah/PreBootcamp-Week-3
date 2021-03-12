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