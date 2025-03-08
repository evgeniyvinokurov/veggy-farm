import Vue from '../../shop-src-lib/vue.js';

import { ToolsService } from '../services/toolsService.js';
import { ProductsService } from '../services/productsService.js';

let Main = Vue.component('catalog', {
  	template: '<div>'+
      '<div class="products-list"><div v-for="(item, index) in products" class="product-card">'+
      '<img  :src="item.pic2" />'+
  		'<div class="product-card__name">{{item.name}}</div>'+
  		'<div class="product-card__price">{{item.price}}</div>'+
  		'<div class="product-card__cover"></div>'+
      '<a :href="item.url" class="product-card__buy" v-bind:class="{ hide: (item.badge.length > 0) || orderCreated}">buy</a>'+
  	 '</div></div>'+    
     '</div>',
    data: function () {
        return {
          products: [],
          orderCreated: false,
          bestPrice: 0
        }
    },
  	created: function() {
      var self = this;
      
      // this.bigImageUrl = PicsService.finallyGetPicUrl(this.bigImageSize).final;
      
  		this.products = ProductsService.getAllProducts();
  		
  		// this.bestPrice = ToolsService.getRandomFloat(0, 1000, 2);

      this.$root.$on("orderCreated", function(){
        self.orderCreated = true;
      }); 

      this.$root.$on("catalogRefresh", function(){
        self.products = ProductsService.getAllProducts();
        self.currentProducts = ProductsService.getCurrentProducts();
        
        var ids = []; 
        for(var p of self.currentProducts) {
          ids.push(p.id);
        }

        for(var p of self.products) {
          if (ids.indexOf(p.id) !== -1){
            p.badge = "added";
          }
        }

        self.$forceUpdate();
      });

      this.$root.$on("cancelOrder", function(){
        self.orderCreated = false;
      }); 
    },
    methods: {
    	sortCatalog: function(direction) {
    		
    	}
    }
})

export { Main };
