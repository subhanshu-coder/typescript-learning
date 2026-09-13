const chaiflavours: string [] = ["chai", "jasmine", "ava"];
const chaiPrice: number [] = [10,20,30];

const rating: Array<number> = [2.5,5.0]

type chaivalue = {
    name: string;
    price: number;
}

const menu: chaivalue[] = [
    {name : "masala", price: 25},
    {name : "ginger", price: 20}
]

const cities: readonly string[] = ["delhi", "jaipur"]
// cities.push("push")

const table : number[][] = [
    [1,2,3,4],
    [5,6,7,8]
]

let chaituple: [string, number];
chaituple = ["chai", 10]
// chaituple = [20, "masala"] //this is wrong because the first element should be string and second should be number
chaiPrice.push("dhyan"); //this is wrong because chaiPrice is of type number[] and we are trying to push a string into it

let userInfo: [string, number, boolean] 
userInfo = ["dhyan", 20, true]