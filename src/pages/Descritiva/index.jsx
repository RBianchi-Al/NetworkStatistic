import React from 'react';
import Navbar from '../../components/navbar';

import { Container, Title } from './styles';

import CenteredGrid from '../../components/Grid';

export default function Descritiva() {
  return (
    <>
      <Navbar />

      <Container>
        <Title>Estatística Descritiva</Title>
        <hr></hr>
        
        <CenteredGrid />
      </Container>
    </>
  );
}
