import {sanity} from "../sanity.js";

export default async function Products() {
	const query = 
		`*[_type == 'product']{
		name,
		'productCategory': category->name,
	}`;

	// const params = {};

	const products = await sanity.fetch(query);

	function createProductCards() {
		products.forEach((product, index) => {
			const productCard = document.createElement('div');
			productCard.className = 'product_card';

			const productName = document.createElement('h2');
			productName.textContent = products[index].name;
			productCard.appendChild(productName);

			const productCategory = document.createElement('p');
			productCategory.textContent = products[index].productCategory;
			productCard.appendChild(productCategory);

			const productList = document.getElementById('product_container');
			productList.appendChild(productCard);


			console.log(products);
		});
	}

	createProductCards();
}

