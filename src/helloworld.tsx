/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import HelloForm from 'helloform';
import HelloContent from 'hellocontent';

export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
        this.handleChange = this.handleChange.bind(this)
    }
    
    public handleChange(event: any) : void {
        
        this.setState({ name: event.target.value });
    }

	public render() {
		return (
            <div>
                <HelloForm 
                    name = { this.state.name }
                    handleChange = { this.handleChange } 
                />
                <HelloContent 
                    name = { this.state.name }
                />
            </div>
        );
	}
}
