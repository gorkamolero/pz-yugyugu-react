import React from 'react'
import { Button, ButtonGroup, Typography, Grid, Container, Fade, Divider } from '@material-ui/core'
import { RemoveRedEye as Eye } from '@material-ui/icons'
import SwipeableViews from 'react-swipeable-views'

import { useTemplate, getPreview } from '../../state/Template'
import Setting from './Setting'

const Tab = ({ index, tab, children }) => (
  <Container component="article" role="tabpanel" hidden={tab !== index}>
    {children}
  </Container>
)

const Section = ({ title, settings }) => (
  <>
    <section style={{ padding: '24px 0' }}>
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

const ControlNav = ({ tab, setTab }) => {
  const [data, dispatch] = useTemplate()

  return (
    <Grid container spacing={1} justify="space-between" style={{
      padding: '24px 24px 0'
    }}>
      <Grid item>
        <ButtonGroup>
          {
            data.tabs && data.tabs.map(({ title }, i) => (
              <Button
                className={tab === i ? 'active' : ''}
                key={i}
                onClick={() => setTab(i)}
              >
                {title}
              </Button>
            ))
          }
        </ButtonGroup>
      </Grid>
      <Grid item>
        <Fade in={(data.hasOwnProperty('changed'))}>
          <Button
            variant="outlined"
            onClick={() => getPreview(data.changed, dispatch)}
            startIcon={<Eye />}
          >
            Preview
              </Button>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default Control