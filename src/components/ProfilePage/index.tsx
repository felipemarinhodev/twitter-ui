import React from 'react';

import {
  Banner,
  Avatar,
  CakeIcon,
  Container,
  Followage,
  ProfileData,
  LocationIcon,
} from './styles';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Felipe Marinho</h1>
        <h2>@felipemarinhodev</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@lalala</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasília-DF
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 23 abril de 1986
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            seguidores <strong>672</strong>
        </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;