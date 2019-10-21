import React from 'react'
import { TextField } from '@material-ui/core'
import { useTemplate } from '../../state/Template'

const Setting = ({
  id,
  title,
  type,
  value: initialValue,
}) => {
  const [data, dispatch] = useTemplate()
  const [value, setValue] = React.useState(data.settings[id].value)

  console.log(value)

  return (
    <TextField
      label={title}
      value={value}
      fullWidth
      margin="normal"
      variant="outlined"
      onChange={(e) => {
        console.log(e.target.value)
        setValue(id, e.target.value)
      }}
    />
  )
}

export default Setting