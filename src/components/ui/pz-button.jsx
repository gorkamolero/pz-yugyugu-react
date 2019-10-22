import React from 'react'
import Button from '@material-ui/core/Button';

function PZ_Button({buttonText = 'Button'}) {
    return (
        <Button variant="contained" size="large" color="white">
            {buttonText}
        </Button>
    )
}

export default PZ_Button
