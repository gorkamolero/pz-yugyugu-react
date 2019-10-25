/*
Extract:

General {
	title
	font family
	big font size
	Color
}

Components: component
	Type
	settings []
*/


export default {
	server: {
		id: 0,
		type:'pz-email-template',
		settings:[],
		head:{
			entries:[
				{
					id: 1,
					type:'title',
					settings: [
						{key:'content', value:'Hello World'},
					]
				},
				{
					id: 2,
					type:'font',
					settings:[
						{key:'name', value:'Raleway'},
						{key:'href', value:'https://fonts.googleapis.com/css?family=Raleway'}
					]
				}
			],
			attributes:[
				{
					id: 3,
					type: 'class',
					settings: [
						{key:'name', value:'big'},
						{key:'font-size', value:'20px'},
					]
				},
				{
					id: 4,
					type:'all',
					settings: [
						{key:'font-family',	value:'Raleway, Arial'},
						{key:'font-weight',	value:'400'}
					]
				},
				{
					id: 5,
					type:'text',
					settings:[
						{key:'color', value:'#CCC'},
						{key:'font-family', value:'Arial'}
					]
				}
			]
		},	
		body:{
			id: 6,
			settings:[],
			rows:[
				{
					id: 7,
					settings:[],
					cols:[
						{
							settings:[],
							component:{
								id: 8,
								type:'image',
								settings:[
									{
										type: 'text',
										title: 'Logo Image URL',
										key: 'src',
										value: 'https://mjml.io/assets/img/logo-small.png'
									}
								]
							}
						}
					]				
				}, 
				{
					id: 9,
					settings:[],
					cols: [
						{
							id: 10,
							settings:[],
							component: {
								id: 11,
								type:'text',
								settings:[
									{
										key:'content',
										value:'Texto 1'
									}
								]
							},
						},
						{
							id: 12,
							settings:[],
							component: {
								id: 13,
								type:'text',
								settings:[
									{
										key:'content',
										value:'Texto 2'
									}
								]
							}
						}
					]				
				}			
			]
		}
	},
}