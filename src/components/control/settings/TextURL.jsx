import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { Public } from '@material-ui/icons'

const TextOrURL = ({ value, title, onChange, type }) => {
  return (
    <TextField
      variant="outlined"
      label={title}
      value={value}
      multiline={value.length > 24 && !(value.includes('https'))}
      fullWidth
      margin="normal"
      key={title}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: value.includes('https') ? <InputAdornment position="start"><Public /></InputAdornment> : null,
      }}
    />
  )
}
export default TextOrURL