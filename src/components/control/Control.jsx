import React from 'react'
import { useTemplate } from '../../state/Template'
import Setting from './Setting'
import { Button } from '@material-ui/core'

const Section = ({ title, settings })  => (
  <section>
    <h1>{title}</h1>
    {
      settings.map((props) => (
        <Setting key={props.id} {...props} />
      ))
    }
  </section>
)


function Control() {
  const [data] = useTemplate()
  
  const sendToAPI = () => {
    // console.log(data)
  }

  return (
    <>
      {
        data.sections.map(({title, settings: set}, i) => {
          const settings = set.map(id => ({ id, ...data.settings[id]} ))
          return (
            <Section key={title} title={title} settings={settings} />
          )
        })
      }

      <br/>

      <Button variant="contained" color="primary" onClick={() => sendToAPI()}>
        Save & Preview
      </Button>
    </>
  )
}

export default Control