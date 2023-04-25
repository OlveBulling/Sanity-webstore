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
		products.forEach((product, index) => {
			const productCard = document.createElement('div');
			productCard.className = 'product_card';

			const productTitle = document.createElement('h2');
			productTitle.className = 'product_title'
			productTitle.textContent = products[index].name;
			productCard.appendChild(productTitle);

			const productCategory = document.createElement('p');
			productCategory.className = 'product_category';
			productCategory.textContent = products[index].category;
			productCard.appendChild(productCategory);

			const productPrice = document.createElement('p');
			productPrice.classnName = 'product_price';
			productPrice.textContent = (products[index].price) + 'kr';
			productCard.appendChild(productPrice);


			product.images.forEach((imageUrl) => {
				const productImage = document.createElement('img');
				productImage.className = 'product_image'
				productImage.src = imageUrl;
				productCard.appendChild(productImage);
			})
			
			const productList = document.getElementById('product_container');
			productList.appendChild(productCard);
		});
	}

	createProductCards();
}

