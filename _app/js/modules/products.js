import {sanity} from "../sanity.js";

export default async function Products() {
	const query = 
		`*[_type == 'product'] {
			'images': image[].asset->url,
			name,
			'category': category->name,
			price,
			describtion,
		 }`;

	// const params = {};

	const products = await sanity.fetch(query);

	function createProductCards() {
		// creating product card
		products.forEach((product, index) => {
			const productCard = document.createElement('div');
			productCard.className = 'product_card';

			// creating product title
			const productTitle = document.createElement('h2');
			productTitle.className = 'product_title'
			productTitle.textContent = products[index].name;
			productCard.appendChild(productTitle);

			// creating product category
			const productCategory = document.createElement('p');
			productCategory.className = 'product_category';
			productCategory.textContent = products[index].category;
			productCard.appendChild(productCategory);

			// creating product price
			const productPrice = document.createElement('p');
			productPrice.className = 'product_price';
			productPrice.textContent = (products[index].price) + 'kr';
			productCard.appendChild(productPrice);


			// creating product images
			product.images.forEach((imageUrl) => {
				const productImage = document.createElement('img');
				productImage.className = 'product_image'
				productImage.src = imageUrl;
				productCard.appendChild(productImage);
			})
			// creating product describtion
			const productDescribtion = document.createElement('p');
			productDescribtion.className = 'product_describtion';
			productDescribtion.textContent = products[index].describtion;
			productCard.appendChild(productDescribtion);
			
			
			const productList = document.getElementById('product_container');
			productList.appendChild(productCard);
		});
	}

	createProductCards();
}

