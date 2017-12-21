var product = {};
var selectedPickers = [];
var availablePickers = [];

$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'resources/droplet/product.json',
		success: function(response) {
			product = response;
			availablePickers = $.map(product.childSkus[0].pickers, function(value, key) {
				return key;
			});
		},
		error: function(error) {
			console.error(error);
		}
	});
});


var updatePickers = function(picker) {
	var updated = availablePickers.filter(function(pickerType) {
		return $(picker).attr('data-avail-'+pickerType) === undefined
	});

	if(updated.length > 1) {
		var selectedPickerType = $(picker).attr('data-picker-type');
	 	var selectedPickerCode = $(picker).attr('data-picker-code');
	 	var map = {};
	 	map[selectedPickerType] = selectedPickerCode;
	 	var pickerMap = {};
	 	
	 	var availableSkus = product.childSkus.filter(function(sku) {
			return sku.pickers[selectedPickerType] === selectedPickerCode &&
			!sku.availability;
		});

	 	$.each(availablePickers, function(index, pickerType) {
	 		if(pickerType !== selectedPickerType) {
		 		pickerMap[pickerType] = new Set();
			 	availableSkus.filter(function(sku) {
			 		return $.map(sku.pickers, function(value, picker) {
						if(picker === pickerType) {
							pickerMap[pickerType].add(value);
						}
					});
			 	});
			 	var attributeName = 'data-avail-' + pickerType;
			 	$(picker).attr(attributeName, Array.from(pickerMap[pickerType]).join());
			}
		});
	} 


	$.each(availablePickers, function(index, pickerType) {
 		if(pickerType !== selectedPickerType) {
			var attributeName = 'data-avail-' + pickerType;
			var dataPickerTypeAttr = "[data-picker-type="+pickerType+"]";
			var dataPickerCodeAttr = 'data-picker-code';
			console.log(dataPickerTypeAttr);
		 	var MyArray = $(picker).attr(attributeName).split(',');
		 	console.log(MyArray);
		 	var SelectedElements = $("input" + dataPickerTypeAttr + "," + Array.from(MyArray, x => '[' + dataPickerCodeAttr + '=' + x + ']') + "");
		 	console.log("input" + dataPickerTypeAttr + "," + Array.from(MyArray, x => '[' + dataPickerCodeAttr + '=' + x + ']') + "")
			$("input" + dataPickerTypeAttr).removeClass('disabled');
			$(SelectedElements).addClass('disabled');
		 	console.log("total SelectedElements = " + SelectedElements.length);
		}
	});
}







/*	var availableColor = $(picker).attr('data-avail-color');
	var availableSize = $(picker).attr('data-avail-size');
	var availableInseam = $(picker).attr('data-avail-inseam');*/


// var color = [
// 	{"1": "red"},
// 	{"2": "yellow"},
// 	{"3": "blue"},
// 	{"4": "green"}
// ];

// var size = [
// 	{"1": "32"},
// 	{"2": "34"},
// 	{"3": "36"},
// 	{"4": "38"}
// ];

// var inseam = [
// 	{"1": "32"},
// 	{"2": "34"},
// 	{"3": "36"},
// 	{"4": "38"}
// ];



// var updatePickers = function(picker) {
// 	var selectedPickerType = $(picker).attr('data-picker-type');
// 	var selectedPickerCode = $(picker).attr('data-picker-code');
// 	var skuMap = {};
// 	var availableSkus = product.childSkus.filter(function(sku) {
// 		return sku.pickers[selectedPickerType] === selectedPickerCode &&
// 		sku.availability;
// 	});
// 	skuMap = {
// 		"pickerType": selectedPickerType,
// 		"pickerCode": selectedPickerCode,
// 		"availableSkus": availableSkus
// 	}
// 	selectedPickers.push(skuMap);
// };

/*var updatePickers = function(picker) {
	var selectedPickerType = $(picker).attr('data-picker-type');
 	var selectedPickerCode = $(picker).attr('data-picker-code');

 	var map = {};
 	map[selectedPickerType] = selectedPickerCode;
 	var pickerMap = {};
 	
 	var availableSkus = product.childSkus.filter(function(sku) {
		return sku.pickers[selectedPickerType] === selectedPickerCode &&
		sku.availability;
	});

 	$.each(availablePickers, function(index, pickerType) {
 		if(pickerType !== selectedPickerType) {
	 		pickerMap[pickerType] = new Set();
		 	availableSkus.filter(function(sku) {
		 		return $.map(sku.pickers, function(value, picker) {
					if(picker === pickerType) {
						pickerMap[pickerType].add(value);
					}
				});
		 	});
		}
	});
 	map.pickerMap = pickerMap;
	selectedPickers.push(map);
	
	$.each(selectedPickers, function(selectedPicker) {
		var found = false;
		if(selectedPicker === map) {

		}
	})
}






	var availablePickers = $.map(product.childSkus[0].pickers, function(value, key) {
		return key;
	})


	pickerMap[pickerCode] = product.childSkus.filter(function(sku) {
			
		});


	if(pickerType !== selectedPickerType) {
 			
 		}



 		$.each(availablePickers, function(index, pickerType) {
 		console.log(pickerType);
 		if(pickerType !== selectedPickerType) {
	 		pickerMap[pickerType] = product.childSkus.filter(function(sku) {
				if(sku.pickers[selectedPickerType] === selectedPickerCode && sku.availability) {
					console.log(sku);
				}
			});
 		}
 	})




















 	var selectedPickerType = $(picker).attr('data-picker-type');
 	var selectedPickerCode = $(picker).attr('data-picker-code');
 	var map = {};
 	map[selectedPickerType] = selectedPickerCode;
 	var pickerMap = {};
 	
 	var availableSkus = product.childSkus.filter(function(sku) {
		return sku.pickers[selectedPickerType] === selectedPickerCode &&
		sku.availability;
	});

 	$.each(availablePickers, function(index, pickerType) {
 		if(pickerType !== selectedPickerType) {
	 		pickerMap[pickerType] = new Set();
		 	availableSkus.filter(function(sku) {
		 		return $.map(sku.pickers, function(value, picker) {
					if(picker === pickerType) {
						pickerMap[pickerType].add(value);
					}
				});
		 	});
		 	var attributeName = 'data-avail-' + pickerType;
		 	$(picker).attr(attributeName, Array.from(pickerMap[pickerType]).join());
		}
	});*/