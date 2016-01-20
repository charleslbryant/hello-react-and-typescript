/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }
    
    public handleOnClick(event: any) : void {
        this.setState({ name: "Charles" });
    }

	public render() {
		return (
            <div>
                Hello { this.state.name }!
                <button 
                    name = "Update"
                    onClick = { e => this.handleOnClick(e) }
                >Update</button>
            </div>
        );
	}
}
