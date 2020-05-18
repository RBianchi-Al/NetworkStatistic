import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CustomizedTables from '../Table';
import { Title } from './styles';
import Grafic from '../Grafic';
import Grafic3 from '../Grafic3';
import Grafic2 from '../Grafic2';
import axios from 'axios';

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
      display: 'flex',
    },
    paper: {
      padding: theme.spacing('5'),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      alignContent: theme.spacing('center'),
      alignItems: theme.spacing('center'),
      verticalAlign: theme.spacing('center'),
    },
    grid: {
      paddingLeft: theme.spacing(15),
      paddingTop: theme.spacing(0),
      paddingRight: theme.spacing(10),
      marginTop: theme.spacing(0),
      minHeight: theme.spacing(100),
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
  const [nomeVariavel, setNomeVariavel] = useState('');
  const [tipoCalculo, setTipoCalculo] = useState('');
  const [valores, setValores] = useState([]);
  const [exibirValor, setExibirValor] = useState('Nome da Variável');
  const [frequencias, setFrequencias] = useState([]);
  const [exibirGrafico, setExibirGrafico] = useState(false);

  const chamarApi = async () => {
    try {
      const {
        data: { frequencias },
      } = await axios.post('http://localhosto:3333/values', {
        nomeVariavel,
        tipoCalculo,
        valores,
        tipoAnalise,
      });
      setFrequencias(frequencias);
    } catch (_error) {
      console.log(_error);
    } finally {
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  function onSubmit(event) {
    setExibirValor(nomeVariavel);
    setExibirGrafico(true);

    event.preventDefault();
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={4} onSubmit={(event) => handleSubmitForm(event)}>
          <Paper className={classes.paper}>
            <Grid container>
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
                      value="1"
                      control={<Radio />}
                      label="População"
                    />

                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Amostra"
                    />
                  </RadioGroup>
                </Grid>
                <label>INSIRA OS VALORES:</label>

                <div className={classes.input}>
                  <TextField
                    label="Nome da variável"
                    style={{ margin: 8 }}
                    fullWidth
                    type="text"
                    className="form-control"
                    name="nome"
                    id="variavel"
                    placeholder=""
                    value={nomeVariavel}
                    onChange={(event) => setNomeVariavel(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    label="Valores espaçados por vírgula"
                    style={{ margin: 8 }}
                    fullWidth
                    type="text"
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
                    value="1"
                    control={<Radio />}
                    label="Qualitativa Nominal"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Qualitativa Ordinal"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Quantitativa Discreta"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Quantitativa Contínua"
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
          {exibirGrafico && (
            <Paper className={classes.paper}>
              <CustomizedTables
                nomeVariavel={exibirValor}
                frequencias={frequencias}
              />
              {tipoCalculo === '1' && <Grafic />}
              {tipoCalculo === '2' && <Grafic />}
              {tipoCalculo === '3' && <Grafic3 />}
              {tipoCalculo === '4' && <Grafic2 />}
            </Paper>
          )}
        </Grid>
            
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Media</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Moda</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Mediana</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Outros Valores</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
