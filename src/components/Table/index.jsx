import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Grafic from '../Grafic';

// import Grid from '@material-ui/core/Paper';
// import Grafic from '../Grafic'

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      // backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



export const frequencias = [
  {
    name: 'Brasil',
    frequencia: 112,
    frequenciaRel: 2.3,
    frequenciaAcumulada: 1.44,
    frequenciaRelAcum: 5.33,
    xi: 2
  },
  {
    name: 'China',
    frequencia: 100,
    frequenciaRel: 2.3,
    frequenciaAcumulada: 1.44,
    frequenciaRelAcum: 5.33,
    xi: 6
  },
  {
    name: 'Russia',
    frequencia: 60,
    frequenciaRel: 2.3,
    frequenciaAcumulada: 1.44,
    frequenciaRelAcum: 5.33,
    xi: 8
  },
  {
    name: 'Britain',
    frequencia: 49,
    frequenciaRel: 2.3,
    frequenciaAcumulada: 1.44,
    frequenciaRelAcum: 5.33,
    xi: 1
  },
  {
    name: 'Australia',
    frequencia: 46,
    frequenciaRel: 2.3,
    frequenciaAcumulada: 1.44,
    frequenciaRelAcum: 5.33,
    xi: 9
  },
  {
    name: 'France',
    frequencia: 43,
    frequenciaRel: 2.3,
    frequenciaAcumulada: 1.44,
    frequenciaRelAcum: 5.33,
    xi: 7
  },
  {
    name: 'Germany',
    frequencia: 41,
    frequenciaRel: 2.3,
    frequenciaAcumulada: 1.44,
    frequenciaRelAcum: 5.33,
    xi: 4
  },

];

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function CustomizedTables(props) {
  const { nomeVariavel } = props;
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{nomeVariavel}</StyledTableCell>
              <StyledTableCell align="right">FI</StyledTableCell>
              <StyledTableCell align="right">FI%</StyledTableCell>
              <StyledTableCell align="right">Fac</StyledTableCell>
              <StyledTableCell align="right">Fac%</StyledTableCell>
              <StyledTableCell align="right">XI</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {frequencias.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.frequencia}
                </StyledTableCell>
                <StyledTableCell align="right">{row.frequenciaRel}</StyledTableCell>
                <StyledTableCell align="right">{row.frequenciaAcumulada}</StyledTableCell>
                <StyledTableCell align="right">{row.frequenciaRelAcum}</StyledTableCell>
                <StyledTableCell align="right">{row.xi}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </>
  );
}

CustomizedTables.propTypes = {
  NameVariavel: PropTypes.func.isRequired,
};
