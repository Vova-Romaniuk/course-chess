
import React from 'react';
import './PopupResult.scss';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { changeVisibility } from "./slices/modalSlices"
import { visibilitySelector } from './slices/modalSlices';
function PopupResult() {
  const visibilityModal = useSelector(visibilitySelector)
	const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(changeVisibility)
  }
  return (
      <Dialog
        
        open={visibilityModal}
        onClose={handleClose()}
      >
        <div className="container">

        </div>
      </Dialog>
  );
}

export default PopupResult;
