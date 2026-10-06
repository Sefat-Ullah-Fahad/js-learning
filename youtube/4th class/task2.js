let items = [250, 645, 300, 900, 50]

// For off loop
// let inx = 0
// for(let value of items){
//     // console.log(valu)
//     // console.log(`${inx} valu ${value}`)
//     let offer = value / 10
//     items[inx] = items[inx] - offer
//     console.log(items[inx])
//     inx ++
// }




// for loop
for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10
    items[i] -= offer
}
console.log(items)
