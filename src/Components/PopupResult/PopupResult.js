import React from 'react';
import './PopupResult.scss';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { changeVisibility } from '../../app/slices/modalSlices';
import { visibilitySelector } from '../../app/slices/modalSlices';
function PopupResult() {
	const visibilityModal = useSelector(visibilitySelector);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(changeVisibility);
	};
	return (
		<Dialog open={visibilityModal} onClose={handleClose()}>
			<div className="container-popup"></div>
		</Dialog>
	);
}

export default PopupResult;
