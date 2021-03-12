const word = "hello"
const sentence = "hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all."


function selectSentence(w, s){
    res = new RegExp(w, "gi")
    x = s.split(".")
    
    const newFilter = x.filter(newWord => newWord.match(res)).join()
    console.log(newFilter)
}

selectSentence(word, sentence)
