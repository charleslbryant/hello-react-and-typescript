/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	public render() {
		return (
          <div>Hello World!</div>
        );
	}
}
