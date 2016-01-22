/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }
    
    public handleOnChange(event: any) : void {
        this.setState({ name: event.target.value });
    }

	public render() {
		return (
            <div>
                <div>
                    <input 
                        onChange={ e => this.handleOnChange(e) }
                    />
                </div>
                <div>
                    Hello { this.state.name }!
                </div>
            </div>
        );
	}
}
