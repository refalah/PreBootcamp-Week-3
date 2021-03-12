// function revNum(num) {
//     x = num.toString();
//     return x.split("").reverse().join("");
// }

// console.log(revNum(12345));

// num = [1, "test", 3, 4];

// //Array//

// const test = num.reverse();
// console.log(test);

const word = "hello"
const sentence = "hello misterasdljald. lasdjfljsdlkfj alksjdlaksjd asldkj. hello all."

function selectSentence(w, s){
    x = s.split(". ")
    // let newArray = []
    // newArray.push(x)
    // const n = x.includes(w)
    // const xy = x.filter(removeE => removeE !== w)
    // console.log(xy)
    const test1 = x.forEach(element => {
        if(!element.includes(w)){
            console.log("Found")
        } else {
            console.log("Lost")
        } 
    });

    
    console.log(test1)
}


selectSentence(word, sentence)