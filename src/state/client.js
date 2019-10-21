export default {
  templateID: 3,
  sections: [
		{
			title: 'Cabecera',
			settings: [1, 2, 3, 4]
		},
		{
			title: 'Editable fields',
			settings: [5, 6]
		}
	],
  settings: {
    1: {
      title: 'Company name',
      type: 'text',
      value: 'Pickzen'
    },
    2: {
      title: 'Font name',
      type: 'text',
      value: 'Raleway'
    },
    3: {
      title: 'Font URL',
      type: 'url',
      value: 'https://fonts.googleapis.com/css?family=Raleway&display=swap'
    },
    4: {
      title: 'Logo URL',
      type: 'url',
      value: 'https://driftt.imgix.net/https%3A%2F%2Fdriftt.imgix.net%2Fhttps%253A%252F%252Fs3.amazonaws.com%252Fcustomer-api-avatars-prod%252F186636%252Fd3287564b6f8da6e8f8616e371d147c13c76gf8xupe5%3Ffit%3Dmax%26fm%3Dpng%26h%3D200%26w%3D200%26s%3Db80c260bb3c75ce2c26828c955634a76?fit=max&fm=png&h=200&w=200&s=0f78bb2bbe004a9220a65e95f5041130'
    },
    5: {
      type: 'text',
      title: 'Texto 1',
      value: 'aklsdjflkasjdklfjlkadsfj'
    },
    6: {
      type: 'text',
      title: 'Texto 2',
      value: 'asdlfjkasldkfjlkasjlkfja'
    }
  },
}