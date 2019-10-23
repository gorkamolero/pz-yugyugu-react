import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import { useTemplate, fetchData } from '../state/Template'

import Preview from '../components/preview/Preview'
import Control from '../components/control/Control'

function Builder() {  
  const [, dispatch] = useTemplate()
  
  React.useEffect(() => {
    fetchData(dispatch)
  }, [dispatch])

  return (
    <div className="builder">
      <div className="control">
        <Scrollbars autoHide style={{width: '100%', height: '100%'}}>
          <main className="controlContainer">
            <Control />
          </main>
        </Scrollbars>
      </div>
      
      <Preview />
    </div>
  )
}

export default Builder