import React, {createContext, useContext, useReducer } from 'react'
import dummy from './client.js'

export const endpoint = 'http://localhost:3001/templates'

const initialState = dummy

export const TemplateContext = createContext()

export const TemplateReducer = (state, {type, id, value, payload}) => {
  switch (type) {
    case 'receiveData': {
      return { ...payload }
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
    case 'fetchStart': return { ...state, loaded: false }
    case 'fetchEnd': return { ...state, loaded: true }
      
    default: return state
  }
}

export const fetchData = async (dispatch) => {
  dispatch({ type: 'fetchStart' });
  const response = await fetch(endpoint);
  const json = await response.json();
  dispatch({ type: 'fetchEnd' })
  
  dispatch({
    type: 'receiveData',
    payload: json[0]
  });
}

export const TemplateProvider = ({children}) => {
  return (
    <TemplateContext.Provider value={useReducer(TemplateReducer, initialState)}>
      {children}
    </TemplateContext.Provider>
  )
}

export const useTemplate = () => useContext(TemplateContext)