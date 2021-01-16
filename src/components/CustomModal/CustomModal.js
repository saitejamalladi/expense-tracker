import React from 'react';
import {Backdrop, Modal} from "@material-ui/core";
import classes from './CustomModal.module.css';

function CustomModal({show, close, children}) {
	return (
		<Modal
			aria-labelledby="spring-modal-title"
			aria-describedby="spring-modal-description"
			open={show}
			className={classes.CustomModal}
			onClose={close}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			{children}
		</Modal>
	);
}

export default CustomModal;