export default async function Test() {
	const sanityURL = `https://fno1qhn8.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'product'%5D%20%7B%0A%20%20name%2C%0A%20%20'productCategory'%3A%20category-%3Ename%2C%0A%7D`;
	const sanityResponse = await fetch(sanityURL);
	const sanityData = await sanityResponse.json();

	console.log(sanityData.result);
}