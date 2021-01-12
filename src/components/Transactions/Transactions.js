import React from 'react';
import {
	Avatar, IconButton,
	List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction,
	Grow, Typography
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { LocalAtm } from '@material-ui/icons';
import Moment from 'react-moment';
import './Transactions.css';

function Transactions({ transactions, Delete }) {
	transactions = transactions.sort((a, b) => (a.date < b.date) ? 1 : -1);
	return (
		<List dense={false}>
			{transactions.map((transaction, index) => (
				<Grow key={index} direction="down" in={true} mountOnEnter unmountOnExit>
					<ListItem className={"Transaction"}>
						<ListItemAvatar>
							<Avatar>
								<LocalAtm/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={<Moment date={transaction.date} format="DD"/>}
							secondary={<Moment date={transaction.date} format="MMM-YY"/>}/>
						<ListItemText style={{textAlign: "left"}}>
							{transaction.title}
						</ListItemText>
						<ListItemSecondaryAction>
							<Typography variant="button" display="block" gutterBottom>
								{transaction.amount}
								<IconButton edge="end" aria-label="delete">
									<DeleteIcon onClick={() => Delete(transaction.id)}/>
								</IconButton>
							</Typography>
						</ListItemSecondaryAction>
					</ListItem>
				</Grow>
				))}
		</List>
	);
}

export default Transactions;