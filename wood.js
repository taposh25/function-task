/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed ----> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const  perChaiarWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChaiarWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;


    const totalWood = chairTotalWood +  tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood  = woodQuantity(1, 1, 4);
console.log('wood needed', wood);

/**
 * shirt price ---> 500
 * pant price ---> 300
 * shoe price ----> 900
 */