import React, { Component } from 'react'

export default class ex11 extends Component {
    
    
    state = {

    


    }
    render() {
        return (
            <div>
               <form action="">
                <input type="checkbox" name="vehicle1" value="Read"/>
                <label for="vehicle1"> I Have Read the Term of the app</label><br></br>
                <input type="checkbox" name="vehicle1" value="Accept"/>
                <label for="vehicle1"> I accept the term of the app</label><br></br>
                <input type="checkbox" name="vehicle1" value="Accept" checked/>
                <label for="vehicle1"> I have a App</label><br></br>
                <input type="checkbox" name="vehicle1" value="Accept" checked/>
                <label for="vehicle1"> I want to get sales and offers</label><br></br>
                </form>
            </div>
        )
    }
}
