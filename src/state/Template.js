import React, {createContext, useContext, useReducer } from 'react'
import clientDummy from './client.js'

const templateID = 1

export const endpoint = 'http://localhost:3001/templates'

const initialState = clientDummy

export const TemplateContext = createContext()

export const TemplateReducer = (state, {type, id, value, data}) => {
  switch (type) {
    case 'receiveData': {
      return { ...data }
    }
    case 'updateField':
      return {
        ...state,
        settings: {
          ...state.settings,
          [id]: {
            ...state.settings[id],
            value
          }
        },
        changed: {
          ...state.changed,
          [id]: value
        }
      }
    case 'setPreview': return {
      ...state,
      html: data.html
    }
    case 'fetchStart': return { ...state, loaded: false }
    case 'fetchEnd': return { ...state, loaded: true }
      
    default: return state
  }
}

export const fetchData = async (dispatch) => {
  if (!window || !window.parent || !window.parent.api) return
  
  dispatch({ type: 'fetchStart' });

  window.parent.api.getTemplate(templateID, (data) => {
    if (!data) return
    
    dispatch({ type: 'receiveData', data })

    dispatch({ type: 'fetchEnd' })
  })  
}

export const getPreview = async (newSettings, dispatch) => {
  if (!window || !window.parent || !window.parent.api) return

  dispatch({ type: 'fetchStart' })

  window.parent.api.getPreview(templateID, newSettings, (data) => {
    if(!data) return

    dispatch({ type: 'setPreview', data })

    dispatch({ type: 'fetchEnd' })
  })
}

export const sendData = async(newSettings, dispatch) => {
  if (!window || !window.parent || !window.parent.api) return

  window.parent.api.setTemplate(templateID, newSettings, () => {
    // If response...
    fetchData(dispatch)
  })
}

export const TemplateProvider = ({children}) => {
  return (
    <TemplateContext.Provider value={useReducer(TemplateReducer, initialState)}>
      {children}
    </TemplateContext.Provider>
  )
}

export const closeBuilder = () => {
  if (!window || !window.parent || !window.parent.api) return
  window.parent.api.closeBuilder()
}
// Tiene que llamar

export const useTemplate = () => useContext(TemplateContext)