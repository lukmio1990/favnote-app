// ButtonIcon component
import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 40%;
  border: none;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
