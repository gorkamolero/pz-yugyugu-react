import React from 'react'
import { useTemplate, fetchData } from '../state/Template'
import { useSnackbar } from 'notistack'

import { Scrollbars } from 'react-custom-scrollbars'

import Nav from '../components/Nav'
import Preview from '../components/preview/Preview'
import Control from '../components/control/Control'

function Builder() {
  const [, dispatch] = useTemplate()
  const { enqueueSnackbar } = useSnackbar()

  React.useEffect(() => {
    async function fetcher() {
      const fetch = await fetchData(dispatch)
      if (fetch && fetch.status) enqueueSnackbar(fetch.message, { variant: fetch.status })
    }
    
    fetcher()
    
  }, [dispatch, enqueueSnackbar])

  return (
    <>
      <Nav />
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
    </>
  )
}

export default Builder