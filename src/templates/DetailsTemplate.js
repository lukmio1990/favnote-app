import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWraper = styled.div`
  padding: 50px 150px 25px 90px;
  max-width: 50vw;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const DetailsTemplate = ({ pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWraper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          to jest tytuł
        </StyledHeading>
        <StyledParagraph>created - 25/03/2019</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
        dolorem impedit est blanditiis eos dolore facere ipsa at, similique
        mollitia numquam nemo, distinctio id excepturi iusto commodi
        consequuntur, eius fuga. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt rem enim provident dolorem odio autem
        dignissimos neque, repellat, accusamus laudantium, ab molestias itaque
        magnam quaerat nostrum sapiente nobis debitis. Reiciendis?{' '}
      </Paragraph>
      <Button>Close/Save</Button>
      {/* <Link to="/">go back</Link> */}
    </StyledWraper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.node,
};

DetailsTemplate.defaultProps = {
  children: null,
};

export default DetailsTemplate;
