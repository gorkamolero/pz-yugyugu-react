import React from 'react'
import { useTemplate } from '../../state/Template'
import Setting from './Setting'

const Section = ({ title, settings })  => (
  <section>
    <h1>{title}</h1>
    { settings.map((props) => (
      <Setting key={props.id} {...props} />
    )) }
  </section>
)


function Content() {
  const [data] = useTemplate()

  return (
    <>
      {
        data.sections.map(({title, settings: set}, i) => {
          const settings = set.map(id => ({ id, ...data.settings[id]} ))
          return <Section key={title} title={title} settings={settings} />
        })
      }
    </>
  )
}

export default Content