import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className= "footer fixed-bottom">
                    <span className="text-muted fixed-bottom">All Rights Reserved 2022 @Group3</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
