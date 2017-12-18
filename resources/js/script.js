var product = {};
var selectedPickers = [];

var color = [
	{"1": "red"},
	{"2": "yellow"},
	{"3": "blue"},
	{"4": "green"}
];

var size = [
	{"1": "32"},
	{"2": "34"},
	{"3": "36"},
	{"4": "38"}
];

var inseam = [
	{"1": "32"},
	{"2": "34"},
	{"3": "36"},
	{"4": "38"}
];

$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'resources/droplet/product.json',
		success: function(response) {
			product = response;
		},
		error: function(error) {
			console.error(error);
		}
	});
});

var updatePickers = function(picker) {
	var selectedPickerType = $(picker).attr('data-picker-type');
	var selectedPickerCode = $(picker).attr('data-picker-code');
	var skuMap = {};
	var availableSkus = product.childSkus.filter(function(sku) {
		return sku.pickers[selectedPickerType] !== selectedPickerCode &&
		sku.availability;
	});
	skuMap = {
		"pickerType": selectedPickerType,
		"pickerCode": selectedPickerCode,
		"availableSkus": availableSkus
	}
	selectedPickers.push(skuMap);
};