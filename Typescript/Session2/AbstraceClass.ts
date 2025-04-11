/**
 * Interface
 * Abstract Class : I cannot create object of abstract
 */


abstract class Payments{

    amount:number;
    paymentType:string;

    constructor(amount:number,paymentType:string){
        this.amount= amount;
        this.paymentType= paymentType;
    }

    abstract upiPayment():number;

    cardPayment():number{
        console.log('Its a card payment');
        return 9;
    }
}
class p1 extends Payments{
    upiPayment(): number {
       console.log('This is upi payments');
       return 8;
    }

}
let payments = new p1(1000, 'upi');
let upi = payments.upiPayment();
console.log(upi);
let cardPay = payments.cardPayment();
console.log(cardPay);
console.log(payments);