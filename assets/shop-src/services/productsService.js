import { ToolsService } from './toolsService.js';

let ProductsService = {
	picSize:180,
	categories: [],
	products:[],
	productsAll:[],
	filters: [],
	getByApi: function(){
		return [
		];
	},
	getByApiAll: function(){
		let products = [];
		let productsAll = JSON.parse(document.getElementById('merchs').textContent);

		for (var i of productsAll) {
			let product = i;
			product.badge = "";
			product.pic2 = "/" + product.pic2;
			product.url = "/merchcard/" + product.id
			
			/*
			// let res = PicsService.finallyGetPicUrl(this.picSize);
			let category = CategoryService.getRandomCategory();			
			
			// product.url = res.final;
			// product.urls = res.pre.reverse();
			product.category = category;
			product.name = CategoryService.getRandomAdjective() + " " + CategoryService.getRandomFoodName().trim() + " and " + CategoryService.getRandomFoodName().trim();
			
			product.name = product.name.toLowerCase();
			
			product.price = "$" + ToolsService.getRandomFloat(1, 2000, 2);
			product.weight = ToolsService.getRandomFloat(100, 500, 2);*/
			
			products.push(i);			
		}

		return products;
	},
	filter: function(mask, from, to) {
		var self = this;

		if (mask) {
			this.filters.push("byTitle");
		} else {
			this.filters = this.filters.filter(f => f !== 'byTitle');
		}

		if (from && to) {
			this.filters.push("byPrice");
		} else {			
			this.filters = this.filters.filter(f => f !== 'byPrice');
		}

		this.productsAll = (this.getByApiAll()).filter(function(el) { 
			var cond1 = (el.name.toLowerCase().indexOf(mask.toLowerCase()) != -1) 
		 	var price = parseFloat(el.price.replace("$", "")); 
		 	var cond2 = (((price) > parseFloat(from)) && (price < parseFloat(to)));
		 	var result = true;

		 	for (var filter of self.filters) {
		 		switch (filter) {
		 			case "byTitle":
		 				result = result && cond1;
		 			break;
		 			case "byPrice": 			
		 				result = result && cond2;
		 			break;
		 		}
		 	}

		 	return result;
		});
		var countFiltered = (this.getByApiAll()).length - this.productsAll.length;		
		return countFiltered;
	},
	clearFilter: function(mask) {
		this.productsAll = this.getByApiAll();
		return this.productsAll;
	},
	getTotalPrice: function() {
		let sum = 0;
		for(let i of this.products){
			sum += parseFloat(i.price.replace("$", ""));
		}
		return "$" + parseFloat(sum).toFixed(2);
	},
	getCurrentProducts: function() {
		return this.products = (this.products.length > 0 ? this.products : this.getByApi());
	},
	getAllProducts: function() {
		return this.productsAll = (this.productsAll.length > 0 ? this.productsAll : this.getByApiAll());
	},
	getCategories: function(){
		this.categories = [];
		let allProducts = this.getAllProducts();
		
		for(let product of allProducts){
			if (this.categories.indexOf(product.category) == -1) {
				this.categories.push(product.category);
			}
		}
		
		return this.categories;
	},
	addProduct: function(item) {
		this.products.push(item);
		return this.products;
	}
};

export { ProductsService };