import React from 'react';
// import Header from "../../components/Navigation/Header/Header";
// import SubHeader from "../../components/Navigation/SubHeader/SubHeader";
import Main from '../../containers/Main/Main';
import classes from './Layout.module.css';

const Layout = ({children}) => {
	return (
		<div className={classes.Layout}>
			{/*<Header className="header"/>*/}
			{/*<SubHeader/>*/}
			<div className={classes.Main}>
				<Main/>
			</div>
			{/*<Footer/>*/}
		</div>
	);
};

export default Layout;