/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

export default class HelloContent extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	public render() {
		return (
            <div>
                Hello { this.props.name }!
            </div>
        );
	}
}