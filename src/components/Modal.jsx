import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  maxHeight: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'hidden',
};

const imgStyles = {
  maxWidth: '100%',
};

export default function BasicModal({ photo }) {
  const open = useSelector(state => state.open);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(modalActions.open());
  const handleClose = () => dispatch(modalActions.close());

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={photo?.urls?.regular}
            alt="user's photos"
            style={imgStyles}
          />
        </Box>
      </Modal>
    </div>
  );
}
