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
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Describtion',
			name: 'describtion',
			type: 'text',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: {type: 'brand'},
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: {type: 'category'},
			validation: (Rule) => Rule.required(),
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
			type: 'array',
			of: [{type: 'reference', to: {type: 'size'}}],
			validation: (Rule) => Rule.required(),
			options: { multiple: true, },
			description: 'Please add all the sizes in which the product is available',
		}
	]
}