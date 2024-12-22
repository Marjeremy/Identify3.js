const productList = ["Shoes", "Shirt", "Hat", "Bag"]; 

const findProductPairs = (products) => {
    const pairs = []; 
    for (let i = 0; i < products.length; i++) {  
        for (let j = i + 1; j < products.length; j++) {  
            pairs.push(`${products[i]} and ${products[j]}`);  
        }
    }
    return pairs;  
}

console.log(findProductPairs(productList));  
module.exports = { findProductPairs };  

//The overall time complexity is dominated by the nested loops (the outer and inner loops)
//The inner loop runs for every pair of products, which leads to a total of O(n²) iterations. Hence, the total time complexity is O(n²).