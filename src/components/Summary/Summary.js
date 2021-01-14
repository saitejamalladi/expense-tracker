import React from 'react';
import {Avatar, Grid} from '@material-ui/core';
import { numFormatter } from '../../shared/Utility';
import classes from './Summary.module.css';

function Summary({name, avatarUrl, currency}) {
	return (
		<Grid container justify={"center"}>
			<Grid item xs={12} md={7}>
				<div className={classes.SummaryBar}>
					<div className={classes.Avatar}>
						<Avatar alt={name} src={avatarUrl} style={{width: '70px', height: '70px'}} />
					</div>
					<div className={classes.ProfileSummary}>
						<div className={classes.WelcomeBar}>Welcome back,</div>
						<div className={classes.ProfileName}>{name}</div>
					</div>
				</div>
				<div>
					<p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales</p>
				</div>
			</Grid>
			<Grid item xs={12} md={5}>
				<div className={classes.BalanceSummaryContainer}>
					<div className={classes.TotalBalance}>Total Balance</div>
					<div className={classes.Balance}>
						<span className={classes.Currency}>{currency.text}</span>
						<span className={classes.Amount}>{numFormatter(7812387.00)}</span>
					</div>
					<div className={classes.BalanceSplit}>
						<div className={classes.Income}>
							<div className={classes.Title}>
								Income
							</div>
							<div className={classes.Amount}>
								<span className={classes.Currency}>{currency.symbol}</span>
								<span className={classes.Text}>{numFormatter(854100.00)}</span>
							</div>
						</div>
						<div className={classes.Expense}>
							<div className={classes.Title}>
								Expense
							</div>
							<div className={classes.Amount}>
								<span className={classes.Currency}>{currency.symbol}</span>
								<span className={classes.Text}>{numFormatter(1.00)}</span>
							</div>
						</div>
					</div>
				</div>
			</Grid>
		</Grid>
	);
}

export default Summary;