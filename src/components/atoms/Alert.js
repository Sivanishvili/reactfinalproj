import { Snackbar, Alert as MUIAlert } from "@mui/material";

export const Alert = ({ open, handleClose, severity, message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MUIAlert onClose={handleClose} severity={severity}>
        {message}
      </MUIAlert>
    </Snackbar>
  );
};
