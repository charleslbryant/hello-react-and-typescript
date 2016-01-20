/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }

	public render() {
		return (
            <div>
                Hello { this.state.name }!
            </div>
        );
	}
}
