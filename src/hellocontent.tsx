/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

import * as React from 'react';

export default class HelloContent extends React.Component<IHelloContentProps, any> {
    constructor(props: IHelloContentProps) {
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