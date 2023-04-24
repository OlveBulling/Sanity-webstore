import {sanity} from "../sanity.js";

export default async function Products() {
	const query = `*[_type == 'product']{
		name,
		'productCategory': category->name,
	}`;

	// const params = {};

	const products = await sanity.fetch(query);

	function renderHTML() {

	}

	renderHTML();
}

