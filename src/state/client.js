export default {
  templateID: 3,
  tabs: [
    {
      id: 1,
      title: 'Content'
    },
    {
      id: 2,
      title: 'Style'
    }
  ],
  sections: [    
    {
      title: 'Head',
      tabID: 2,
      settings: [5, 6]
    },
    {
      title: 'Font',
      tabID: 2,
      settings: [2, 3, 4]
    },
    {
      title: 'Banner content',
      tabID: 1,
      settings: [10, 11, 12]
    },
    {
      title: 'Banner style',
      tabID: 2,
      settings: [7, 8, 9]
    },
    {
      title: 'Buttons',
      tabID: 1,
      settings: [12, 13]
    },
    {
      title: 'Text and buttons',
      tabID: 2,
      settings: [14, 15, 16, 17]
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
      title: 'Font family',
      type: 'text',
      value: 'Raleway'
    },
    5: {
      title: 'Logo Image',
      type: 'url',
      value: 'https://driftt.imgix.net/https%3A%2F%2Fdriftt.imgix.net%2Fhttps%253A%252F%252Fs3.amazonaws.com%252Fcustomer-api-avatars-prod%252F186636%252Fd3287564b6f8da6e8f8616e371d147c13c76gf8xupe5%3Ffit%3Dmax%26fm%3Dpng%26h%3D200%26w%3D200%26s%3Db80c260bb3c75ce2c26828c955634a76?fit=max&fm=png&h=200&w=200&s=0f78bb2bbe004a9220a65e95f5041130'
    },
    6: {
      title: 'Logo width',
      type: 'slider',
      value: "160px"
    },

    7: {
      title: 'Banner image',
      type: 'url',
      value: 'http://i.imgur.com/nwNZ0TW.png%22%7D'
    },
    8: {
      title: 'Banner image width',
      type: 'slider',
      value: "170px"
    },
    9 : {
      title: 'Banner background',
      type: 'color',
      value: '#f3f3f3'
    },
    10: {
      title: 'Banner title',
      type: 'text',
      value: 'Article Title'
    },
    11: {
      title: 'Banner description',
      type: 'text',
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet ipsum consequat.'
    },
    12: {
      title: 'Banner button text',
      type: 'text',
      value: 'READ MORE'
    },
    13: {
      title: 'CTA',
      type: 'text',
      value: 'READ MORE'
    },
    14: {
      title: 'Font color',
      type: 'color',
      value: '#000'
    },
    15: {
      title: 'Buttons text color',
      type: '#fff',
      value: 'READ MORE'
    },
    16: {
      title: 'Buttons back color',
      type: '#8ccaca',
      value: 'READ MORE'
    },
    17: {
      title: 'Buttons radius',
      type: 'slider',
      value: "40px"
    }
  },
}