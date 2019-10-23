import React from 'react'
import { TextField } from '@material-ui/core'
import { useTemplate } from '../../state/Template'

const Setting = ({
  id,
  title,
  type,
  value,
}) => {
  const [, dispatch] = useTemplate()
  console.log(type)

  return (
    <TextField
      label={title}
      value={value}
      fullWidth
      margin="normal"
      variant="outlined"
      onChange={(e) => dispatch({ type: 'updateField', id, value: e.target.value })}
    />
  )
}

export default Setting