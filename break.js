// for(var i = 1; i < 10; i++){
//     if(i == 6 || i == 7 || i == 8){
//         continue;
//     }
//     console.log(i);
// }
var items = ["pen", "book", "Sheet", "Rubber", "Ruler", "paper"];
// while(items.length){

// }
for( var i = 0; i < items.length; i++){
    if(i == 2){
        continue;
    }
    else if(i > 4){
        break;
    }
    var item = items[i];
    console.log(item);
}