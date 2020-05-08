import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const columns = [
  { id: 'Bank', label: 'Bank', minWidth: 170 },
  { id: 'IFSC', label: 'IFSC', minWidth: 100 },
  {
    id: 'Branch',
    label: 'Branch',
    minWidth: 170,
  },
  {
    id: 'Bank ID',
    label: 'Bank ID',
    minWidth: 100,
   
  
  },
  {
    id: 'Address',
    label: 'Address',
    minWidth: 170,
   
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

 const  StickyHeadTable = (props)=> {

  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(()=>{
    setPage(0)
  },[props.rows])

  

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell/>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={data.ifsc}>
                <TableCell size='small'><StarBorderIcon/></TableCell>
            <TableCell size='small'>{data.bank_name}</TableCell>
            <TableCell size='small'>{data.ifsc}</TableCell>
            <TableCell size='small'>{data.branch}</TableCell>
            <TableCell size='small'>{data.bank_id}</TableCell>
            <TableCell size='small'>{data.address}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default StickyHeadTable
