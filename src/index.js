import React,{ Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/style.css';
import { Container, Row, Col } from 'reactstrap';

const title = 'My Minimal React Webpack Babel Setup';

export default class Hello extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>.col</Col>
				</Row>
			</Container>
		);
	}
}
render(<Hello />,document.getElementById('root'));
