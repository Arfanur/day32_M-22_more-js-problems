const names = ['abil', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);
    // }

    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);





const numbers = [32, 23, 12, 24, 83, 13, 32, 23, 12, 24, 83];
function removeDuplicateNum(a) {
    const uniqueNum = [];
    for (const element of a) {
        if (uniqueNum.indexOf(element) == -1) {
            uniqueNum.push(element);
        }
    }
    return uniqueNum;
}
const uniqueNumber = removeDuplicateNum(numbers);
console.log(uniqueNumber);
