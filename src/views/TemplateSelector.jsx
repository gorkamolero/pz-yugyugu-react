import React from 'react'
import { Switch, Route, useRouteMatch, Link } from "react-router-dom"
import { Fab, Button, ButtonGroup } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

import Template from "../components/Template";

function TemplateSelector() {
    let match = useRouteMatch();
    return (
        <div className="builder">
            <div className="control">
                <div className="controlHeader">
                
                    <p>
                        Templates
                    </p>
                </div>
                
            
            </div>
            <div>
                <div className="controlHeader">
        
                    <p>
                        Select your prefered template
                    </p>
                </div>
                <div>
                    <Link to='builder/1'>
                        <Template template={"1"}/>
                    </Link>
                    <Link to='builder/2'>
                        <Template template="<h1>hola</h1>"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TemplateSelector
