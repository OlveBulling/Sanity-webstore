export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Describtion',
			name: 'describtion',
			type: 'text',
		},
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: {type: 'brand'},
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: {type: 'category'},
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Size',
			name: 'size',
			type: 'reference',
			to: {type: 'size'},
		}
	]
}