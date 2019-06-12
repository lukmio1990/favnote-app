import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';

const WrapperSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 153px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  padding: 30px 0;
`;

const StyledLinksList = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  /* margin-bottom: 25vh; */
`;

const LogoIcon = styled(ButtonIcon)`
  border-radius: 0%;
  width: 70px;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <WrapperSidebar activeColor={pageType}>
    <LogoIcon exact as={NavLink} to="/" icon={logoIcon} />

    <StyledLinksList>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={penIcon} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
      </li>
    </StyledLinksList>

    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
  </WrapperSidebar>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
