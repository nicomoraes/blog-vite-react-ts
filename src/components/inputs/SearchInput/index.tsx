import React, { HTMLAttributes } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container, StyledInput, StyledButton } from './styles';

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  onSearchClick?(): void;
  value: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearchClick, value, ...rest }) => {
  return (
    <Container>
      <StyledButton onClick={onSearchClick}>
        <AiOutlineSearch color={'white'} size={20} style={{ margin: 'auto', display: 'block' }} />
      </StyledButton>
      <StyledInput placeholder={'Pesquisar'} value={value} {...rest} />
    </Container>
  );
};
