interface user {
    name : string;
    age : number;
}

function add(a: number, b: number): number {
    return a + b;
}

const user1: user = {
    name :"prince",
    age: 20
};

// type Teatype = "masala" | "ginger" | "lemon"

// function order(t: Teatype) {
// console.log(t);
// }

type basechai = {tealeave : number}
type extra = {milk : number}

type masalachai = basechai & extra
const cup: masalachai = {
    tealeave: 5,
    milk: 10

}
