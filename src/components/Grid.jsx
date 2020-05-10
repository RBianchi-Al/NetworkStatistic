import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CustomizedTables from '../components/Table'
import { Title } from './styles';
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex'
    },
    paper: {
      padding: theme.spacing('flex'),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      alignContent: theme.spacing('center'),
      alignItems: theme.spacing('center'),
      verticalAlign: theme.spacing('center'),
      paddingLeft: theme.spacing('5'),
      paddingRight: theme.spacing('5'),
      paddingBottom: theme.spacing('5'),
      paddingTop: theme.spacing('5'),




    },
    grid: {
      paddingLeft: theme.spacing(15),
      paddingTop: theme.spacing(0),
      paddingRight: theme.spacing(10),
      marginTop: theme.spacing(0),

    },
    select: {
      display: 'flex',
      margin: theme.spacing(3),
    },
    margin: {
      marginBottom: theme.spacing(1),
      flexWrap: 'wrap',
      display: 'flex',
      height: '15ch',

    },
    input: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  })
);

export default function FullWidthGrid() {
  const classes = useStyles();
  const [tipoAnalise, setTipoAnalise] = useState('');
  const [nameVariavel, setNameVariavel] = useState('');
  const [tipoCalculo, setTipoCalculo] = useState('');
  const [valores, setValores] = useState(0);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(valores);
  };

  useEffect(() => {}, [tipoCalculo]);

  function onSubmit(event) {
    console.log(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={4} onSubmit={(event) => handleSubmitForm(event)}>
          <Paper className={classes.paper}>
            <Grid container >
              <div>
                <Title>INSIRA OS DADOS:</Title>
                {/* <input
                  align="center"
                  type="file"
                  className="form-control-file"
                  id="exampleInputFile"
                  aria-describedby="fileHelp"
                ></input>
                <small id="fileHelp" className="form-text text-muted">
                  Somente arquivos no formato...
                </small>
                <hr></hr> */}
                <label>TIPO DE ANÁLISE:</label>
                <Grid>
                  <RadioGroup
                    name="tipoAnalise"
                    value={tipoAnalise}
                    onChange={(event) => setTipoAnalise(event.target.value)}
                    aria-label="position"
                    defaultValue="top"
                    className={classes.select}
                  >
                    <FormControlLabel
                      value="population"
                      control={<Radio />}
                      label="População"
                    />

                    <FormControlLabel
                      value="sample"
                      control={<Radio />}
                      label="Amostra"
                    />
                  </RadioGroup>
                </Grid>
                <label>INSIRA OS VALORES:</label>

                <div className={classes.input}>
                  <TextField
                    label="Label"
                    style={{ margin: 8 }}
                    helperText="Full width!"
                    fullWidth
                    margin="flex"
                    type="text"
                    className="form-control"
                    name="nome"
                    id="variavel"
                    placeholder=""
                    value={nameVariavel}
                    onChange={(event) => setNameVariavel(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    label="Label"
                    style={{ margin: 8 }}
                    helperText="Full width!"
                    fullWidth
                    margin="flex"
                    className="form-control"
                    name="number"
                    id="variavel"
                    placeholder=""
                    value={valores}
                    onChange={(event) => setValores(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>

                <label>SELECIONE A ANÁLISE:</label>
                <RadioGroup
                  name="tipoCalculo"
                  value={tipoCalculo}
                  onChange={(event) => setTipoCalculo(event.target.value)}
                  aria-label="position"
                  defaultValue="top"
                  className={classes.select}
                >
                  <FormControlLabel
                    value="quali"
                    control={<Radio />}
                    label="Qualitativa"
                  />
                  <FormControlLabel
                    value="quanti"
                    control={<Radio />}
                    label="Quantitativa"
                  />
                  <FormControlLabel
                    value="ordinal"
                    control={<Radio />}
                    label="Ordinal"
                  />
                  <FormControlLabel
                    value="discreta"
                    control={<Radio />}
                    label="Discreta"
                  />
                </RadioGroup>
                <Grid container justify="center">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    type="submit"
                    onClick={onSubmit}
                  >
                    CALCULAR
                  </Button>
                  &nbsp; &nbsp;
                  <Button className="danger" variant="contained" size="large">
                    CANCELAR
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <CustomizedTables/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
