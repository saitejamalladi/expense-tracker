import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
}));

function Header(props) {
	let {classes} = props;
	return (
		<div className="Header">
			<AppBar position="static" style={{ background: '#eb0029' }}>
				<Toolbar>
					<Typography className={classes.title} variant="h4" noWrap>
						Expense Tracker
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(useStyles)(Header);