import React from 'react';
import styled from 'styled-components';
import Background from '../../components/background/';
import NavBar from '../../components/nav_bar/';
import Button from '../../components/button/';
import { Person } from '@styled-icons/ionicons-solid/Person';
import Auth from '../../api/authApi';

const PersonIcon = styled(Person)`
  height: 100%;
  width: 100%;
  color: #343434;
`;

const ProfilePhoto = styled.div`
  background-color: white;
  width: 5vw;
  height: 10vh;
  border-radius: 20px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 30vw;
  height: 50vh;
  padding: 0 25vw;
`;

function logOut() {
  Auth.removeToken();
  window.location = '/';
}

const ProfilePage = () => {
  return (
    <Background width="100%">
      <NavBar />
      <ProfileCard>
        <ProfilePhoto>
          <PersonIcon />
        </ProfilePhoto>
        <Button text={'account settings'} />
        <Button text={'stats'} />
        <Button
          text={'log out'}
          onClick={() => {
            logOut();
          }}
        />
      </ProfileCard>
    </Background>
  );
};

export default ProfilePage;
