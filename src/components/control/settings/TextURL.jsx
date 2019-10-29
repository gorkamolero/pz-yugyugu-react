import React from 'react'
import styled from 'styled-components'
import { TextField, InputAdornment } from '@material-ui/core'
import { Public } from '@material-ui/icons'

const FabTextField = styled(TextField)`
  label {
    background: white;
    padding: 0 3px;
  }
`



const TextOrURL = ({ value, title, onChange, type }) => {
  return (
    <FabTextField
      variant="outlined"
      label={title}
      value={value}
      multiline={value.length > 24 && !(value.includes('https'))}
      fullWidth
      margin="normal"
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: value.includes('https') ? <InputAdornment position="start"><Public /></InputAdornment> : null,
      }}
    />
  )
}
export default TextOrURL