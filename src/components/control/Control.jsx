import React from 'react'
import { Typography, Container, Divider } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'

import { useTemplate } from '../../state/Template'
import Setting from './Setting'
import ControlNav from './ControlNav'

function Control() {
  const [data] = useTemplate()
  const [tab, setTab] = React.useState(0)
  return (
    <>
      <ControlNav tab={tab} setTab={setTab} />

      <SwipeableViews index={tab} >
        {
          data.tabs.map((tabItem, i) => (
            <Tab index = { i } tab = { tab } key = { tabItem.title } title = { tabItem.title } >
              {
                data.sections.filter(section => section.tabID === tabItem.id)
                  .map(({ title, settings: set }, i) => {
                    const settings = set.map(id => ({ id, ...data.settings[id] }))
                    return (
                      <Section key={i} title={title} settings={settings} />
                    )
                  })
              }
            </Tab>
          ))
        }
      </SwipeableViews>
    </>
  )
}



const Tab = ({ index, tab, children }) => (
  <Container component="article" role="tabpanel" hidden={tab !== index}>
    {children}
  </Container>
)

const Section = ({ title, settings }) => (
  <>
    <section style={{ padding: '24px 0', maxWidth: '60ch' }}>
      {title.length > 0 && <Typography variant="h6">{title}</Typography>}
      {
        settings.map((props) => (
          <Setting key={props.id} {...props} />
        ))
      }
    </section>
    <Divider />
  </>
)

export default Control