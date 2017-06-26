import React from 'react';

import Sample from '../../components/sidebar';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
	render () {
		return <Sample message='React Sample'></Sample>
	}
}
