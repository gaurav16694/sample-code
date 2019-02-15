function verifyItems(origItems,origPrices,items,prices)
{
	var diff = 0;
	var orig ={};
	origItems.forEach(function(element,index){
		orig[element] = origPrices[index];
	});
	var sold ={};
	items.forEach(function(element,index){
		sold[element] = prices[index];

	});
	for (var key in sold) {
		if(orig[key] != sold[key])
		diff++;
     }

     return diff;
};
