import {sanity} from "../sanity.js";

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
	
	products.forEach((product, index) => {
		const categories = products[index].category;

		const button = document.createElement('button');

		button.className = 'category_button';

		button.innerText = categories;

		buttonContainer.appendChild(button);
	});
}