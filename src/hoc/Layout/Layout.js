import React from 'react';
import Header from "../../components/Navigation/Header/Header";
import SubHeader from "../../components/Navigation/SubHeader/SubHeader";
import Main from '../../containers/Main/Main';
import Footer from "../../components/Navigation/Footer/Footer";

const Layout = ({children}) => {
	return (
		<div className={"Layout"}>
			<Header className="header"/>
			<SubHeader/>
			<Main/>
			<Footer/>
		</div>
	);
};

export default Layout;