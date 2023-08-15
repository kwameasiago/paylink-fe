import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    maxWidth: '800px',
  },
  textField: {
    marginBottom: theme.spacing(5),
  },
}));

const OrganizationForm = ({ onSubmit }) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            fullWidth
            name="name"
            label="Name"

            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            fullWidth
            name="description"
            label="Description"
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add organization
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default OrganizationForm;
