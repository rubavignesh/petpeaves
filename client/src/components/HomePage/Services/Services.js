import { Box, Container } from '@material-ui/core';
import React from 'react';
import servicesInfoData from '../../DataStore/ServicesInfoData';
import { Row } from 'react-bootstrap';

const Services = () => {
    return (
        <Container align="center" style={{ marginTop: '5rem', width: '85%',fontFamily:'initial' }}>
            {/* <h4 style={{ color: '#05638d' }}>OUR SERVICES</h4> */}
            <h2 style={{ color: '#05638d', fontWeight: 'bold',fontFamily:'initial',fontFace:'bold' }}>Services We Provide</h2>
                <Box display="flex" justifyContent="center" flexWrap="wrap" m={1} p={4}>
                    {
                        servicesInfoData.map((service, idx) =>
                            <Box key={idx} p={5}>
                                <img style={{width: '150px'}} src={service.img} alt="" />
                                <h3 style={{ color: '#F0D153', margin: '1.5rem' }}>{service.name}</h3>
                                <p>{service.description}</p>
                            </Box>
                        )
                    }
                </Box>
        </Container>
    );
};

export default Services;