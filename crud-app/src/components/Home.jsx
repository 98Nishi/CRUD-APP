import React from 'react';
import { Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background:#d9d9d9;

`;

const Title = styled(Typography)`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled(Typography)`
  font-size: 18px;
  text-align: center;
  color: #432818;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled('div')`
  display: flex;
  gap: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Title variant="h4" gutterBottom>
      Welcome to CRUD App - Manage Your Data Effortlessly!
      </Title>
      <Description variant="body1" gutterBottom>
      CRUD App simplifies data management. Add, view, edit, and delete user records with ease. Take control of your data with a user-friendly interface. Experience the convenience of CRUD App today!
      </Description>
      <ButtonContainer>
        <Button component={Link} to="/add" variant="contained" color="primary">
          Add User
        </Button>
        <Button component={Link} to="/all" variant="contained" color="secondary">
          View All Users
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;