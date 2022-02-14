
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}



let order = (Fruit_name, call_prod) => {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_prod()
    },2000)
  
};
// callback hell .... boze ti sacuvaj ovo ovako nece moci :/
let production  = () => {
    setTimeout(()=>{
        console.log("prod has started")
        setTimeout(() => {
            console.log("the fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("machine was started")
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`);
                        setTimeout(()=> {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout (()=>{
                                console.log("serve ice cream")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
}
order(0,production);