import React from "react";
import Layout from "../src/components/layouts/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(5)
  },
  headline: {
    marginBottom: theme.spacing(3)
  }
}));

export default function AccountCreated() {
  const classes = useStyles();
  return (
    <Layout title="Account created" hideHeadline>
      <Paper className={classes.root}>
        <Typography variant="h5" className={classes.headline}>
          Congratulations! Just one more step to complete your signup!
        </Typography>
        <Typography variant="h4">
          <div>We have sent you an E-Mail with a link!</div>
          <div>Please click on the link to activate your account.</div>
          <br/>
          <Typography variant="h6">Make sure to also check your spam folder incase you cannot find the E-Mail.</Typography>
          <Typography variant="h6">If you are experiencing any problems, contact us at support@climateconnect.earth</Typography>
        </Typography>
      </Paper>
    </Layout>
  );
}
