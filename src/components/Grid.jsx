import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Form, Title } from './styles';
import CustomizedTables from './Table/index';


import {
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
}));

function CenteredGrid() {
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
    <>
      <form onSubmit={(event) => handleSubmitForm(event)}>
        <Grid container className={classes.root}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div>
              <Title>INSIRA OS DADOS:</Title>
                <br />
                <br />
                <input
                  align="center"
                  type="file"
                  className="form-control-file"
                  id="exampleInputFile"
                  aria-describedby="fileHelp"
                ></input>
                <small id="fileHelp" className="form-text text-muted">
                  Somente arquivos no formato...
                </small>
                <hr></hr>
                <label>TIPO DE ANÁLISE:</label>
                <Grid>
                  <RadioGroup
                    name="tipoAnalise"
                    value={tipoAnalise}
                    onChange={(event) => setTipoAnalise(event.target.value)}
                    row
                    aria-label="position"
                    defaultValue="top"
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
                <hr></hr>
                <Form>
                  <label>INSIRA O NOME DA VARIÁVEL:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    id="variavel"
                    placeholder=""
                    value={nameVariavel}
                    onChange={(event) => setNameVariavel(event.target.value)}
                  ></input>
                </Form>
                &nbsp;
                <Form>
                  <label>INSIRA OS VALORES:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    id="variavel"
                    placeholder=""
                    value={valores}
                    onChange={(event) => setValores(event.target.value)}
                  ></input>
                </Form>
                <hr></hr>
                <label>SELECIONE A ANÁLISE:</label>
                <RadioGroup
                  name="tipoCalculo"
                  value={tipoCalculo}
                  onChange={(event) => setTipoCalculo(event.target.value)}

                  aria-label="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="opcao1"
                    control={<Radio />}
                    label="Qualitativa"
                  />
                  <FormControlLabel
                    value="opcao2"
                    control={<Radio />}
                    label="Qualitativa"
                  />
                  <FormControlLabel
                    value="opcao3"
                    control={<Radio />}
                    label="Ordinal"
                  />
                  <FormControlLabel
                    value="opcao4"
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
            </Paper>
          </Grid>
          <Grid item xs={1}/>

          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <Title>TABELA</Title>
              <CustomizedTables />
              <br></br>
              <Title>GRÁFICOS</Title>
              <CustomizedTables />
            </Paper>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default CenteredGrid;
