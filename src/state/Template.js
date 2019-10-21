import React, {createContext, useContext, useReducer} from 'react'
import dummy from './client'

export const TemplateContext = createContext()

export const initialState = dummy

export const reducer = (state, {type, id, value}) => {
  switch (type) {
    case 'updateField':
      return {
        ...state,
        
        // settings: {
        //   ...state.settings,
        //   oid: value
        // }
      }
      
    default: return state
  }
}

export const TemplateProvider = ({reducer, initialState, children}) =>(
  <TemplateContext.Provider  
    value={useReducer(reducer, initialState)}>
    
    {children}
  </TemplateContext.Provider>
)

export const useTemplate = () => useContext(TemplateContext)