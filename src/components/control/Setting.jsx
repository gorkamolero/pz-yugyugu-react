import React from 'react'
import { useTemplate } from '../../state/Template'
import TextOrURL from './settings/TextURL'
import HTMLEditor from './settings/HTMLEditor'
import Color from './settings/Color'
import Slider from './settings/Slider'

const Setting = (props) => {
  const { id, type } = props
  const [, dispatch] = useTemplate()

  const onChange = (value) => dispatch({ type: 'updateField', id, value })

  if(!type) return null

  switch(type) {
    case 'url': return <TextOrURL onChange={onChange} {...props} />
    case 'text': return <TextOrURL onChange={onChange} {...props} />
    case 'html': return <HTMLEditor onChange={onChange} {...props} />
    case 'color': return <Color onChange={onChange} {...props} />
    case 'slider': return <Slider onChange={onChange} {...props} />
    default: return null
  }
}

export default Setting