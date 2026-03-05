// while ----------------------------------------------------------------

let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;

while(index1<friends1.length){
    if( typeof friends1[index1] != typeof index1 && !(friends1[index1].startsWith("A")) ){
        counter ++;
        console.log(`${counter} => ${friends1[index1]}`);
    }
    index1++;
}
