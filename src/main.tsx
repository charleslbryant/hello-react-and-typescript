/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as DOM from 'react-dom';

const root = document.getElementById('app');

class Main extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	public render() {
		return (
          <div>Hello World</div>
        );
	}
}

DOM.render(<Main />, root);  