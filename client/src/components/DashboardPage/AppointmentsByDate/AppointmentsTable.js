import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        width: '100%',
        overflowY: 'scroll',
        '& .MuiTableCell-head': {
            fontWeight: 'bold'
        }
    },
    tableCell: {
        width: 60,
    },
});

const AppointmentsTable = ({ appointments }) => {
    const classes = useStyles();

    const getButtonStyle = (action) => ({
        backgroundImage: `linear-gradient(to right, ${action === 'Visited' ? '#4CAF50' : '#FF0000'}, ${action === 'Visited' ? '#4CAF50' : '#FF0000'})`,
        color: 'white'
    });

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}>User Name</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Service</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Pet</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Date</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Contact</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Doctor</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment) => (
                        <TableRow key={appointment._id}>
                            <TableCell component="th" scope="row">
                                {appointment.username}
                            </TableCell>
                            <TableCell align="center">{appointment.serviceType}</TableCell>
                            <TableCell align="center">{appointment.pet}</TableCell>
                            <TableCell align="center">{appointment.appointmentDate + appointment.appointmentTime}</TableCell>
                            <TableCell align="center">{appointment.phone}</TableCell>
                            <TableCell align="center">{appointment.doctor}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    style={getButtonStyle(appointment.status)}
                                >
                                    {appointment.status}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AppointmentsTable;
