import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Felipe Marinho</strong>
          <span>69 Twetts</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage /> */}

      {/* <BottomManu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomManu> */}
    </Container>
  );
}

export default Main;