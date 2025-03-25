var maxContainers = function(n, w, maxWeight) {
    let cargoCount = n*n
    let currentWeight = cargoCount * w
    while(currentWeight > maxWeight){
      
         cargoCount=cargoCount-1
         currentWeight = cargoCount * w
    }

    console.log(cargoCount)
};

maxContainers(3,5,20)