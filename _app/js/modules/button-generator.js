import {sanity} from "../sanity.js";
import createProductCards from './products.js';

export default async function buttonGenerator() {
	const query = 
		`*[_type == 'product'] {
			'images': image[].asset->url,
			name,
			'category': category->name,
			price,
			describtion,
		 }`;

	const products = await sanity.fetch(query);

	const buttonContainer = document.getElementById('button_container');

	const filterProductsByCategory = (category) => {
		const productCards = document.querySelectorAll('.product_card');
		productCards.forEach((card) => {
			if (card.querySelector('.product_category').textContent === category) {
				card.classList.remove('hidden');
			} else {
				card.classList.add('hidden');
			}
		});
	}
	
	products.forEach((product, index) => {
		const categories = products[index].category;

		const button = document.createElement('button');

		button.className = 'category_button';

		button.innerText = categories;

		button.addEventListener('click', () => {
			filterProductsByCategory(categories);
		});

		buttonContainer.appendChild(button);
	});
}