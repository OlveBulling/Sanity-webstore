import {sanity} from "../sanity.js";

export default async function Products() {
	const query = 
		`*[_type == 'product'] {
			'images': image[].asset->url,
			name,
			'category': category->name,
		 }`;

	// const params = {};

	const products = await sanity.fetch(query);

	function createProductCards() {
		products.forEach((product, index) => {
			const productCard = document.createElement('div');
			productCard.className = 'product_card';

			const productTitle = document.createElement('h2');
			productTitle.className = 'product_title'
			productTitle.textContent = products[index].name;
			productCard.appendChild(productTitle);

			const productCategory = document.createElement('p');
			productCategory.textContent = products[index].category;
			productCategory.className = 'product_category';
			productCard.appendChild(productCategory);

			product.images.forEach((imageUrl) => {
				const productImage = document.createElement('img');
				productImage.src = imageUrl;
				productImage.className = 'product_image'
				productCard.appendChild(productImage);
			})
			
			const productList = document.getElementById('product_container');
			productList.appendChild(productCard);
		});
	}

	createProductCards();
}

