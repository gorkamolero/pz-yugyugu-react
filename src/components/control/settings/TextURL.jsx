import React from 'react'
import { TextField } from '@material-ui/core'

const TextOrURL = ({ value, title, onChange }) => {
  return (
    <TextField
      label={title}
      value={value}
      fullWidth
      margin="normal"
      key={title}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
export default TextOrURL