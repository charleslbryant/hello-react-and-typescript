/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

import * as React from 'react';

export default class HelloForm extends React.Component<IHelloFormProps, any> {
    constructor(props: IHelloFormProps) {
        super(props);
    }

	public render() {
		return (
            <div>
                <input 
                    value={ this.props.name }
                    onChange={ e => this.props.handleChange(e) }
                />
            </div>
        );
	}
}