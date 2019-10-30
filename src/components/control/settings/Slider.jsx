import React from 'react'
import { Typography, Slider, Tooltip } from '@material-ui/core'

const SuperSlider = ({
  title,
  value: valueString,
  onChange
}) => {
  const setToNumber = (str) => parseInt(str, 10)
  const setToString = (num) => num.toString().concat('px')
  const [value, setValue] = React.useState(setToNumber(valueString))
  
  const onChangeWithPx = (value) => {
    setValue(value)
    onChange(setToString(value))
  }

  return (
    <article style={{ paddingTop: '24px' }}>
      <Typography variant="body1" gutterBottom>{title}: {value}px</Typography>

      <Slider
        ValueLabelComponent={ValueLabelComponent}
        min={20}
        max={500}
        defaultValue={value}
        onChangeCommitted={(e, value) => onChangeWithPx(value)}
      />
    </article>
  )
}

const ValueLabelComponent = ({ children, open, value }) => {
  const popperRef = React.useRef(null)
  
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update()
    }
  })

  return (
    <Tooltip
      PopperProps={{ popperRef, }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  )
}

export default SuperSlider