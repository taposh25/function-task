/**
 *   laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    laptopPrice = 35000;
    tabletPrice = 15000;
    mobilePrice = 20000;

    const laptopTotalPrice = laptopQuantity * laptopPrice;
    const tabletTotalPrice = tabletQuantity * tabletPrice;
    const mobileTotalPrice = mobileQuantity * mobilePrice;

    const totalPrice = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return totalPrice;
}
const price = calculateElectronicsBudget(1, 3, 5);
console.log(price);
