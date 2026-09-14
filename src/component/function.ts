function makechai(type : string, cups: number) {
    console.log(`makechai ${cups} cupsof ${type} chai`);
}
makechai("masala", 2);

function createchai (order: {
name: string,
price: number
}): number {
    return 4
}

// makechai("ginger", 3);
// function getchaiPrice (): number {
//     return 10;
// }

function makeorder(order:string) {
    if (!order) return null;
    return order;
}

function logchai(): void{
    console.log("chai is ready");
}

function orderchai(type :string = "masala", cups: number = 1): string {
    return `order ${cups} cups of ${type} chai`;
}