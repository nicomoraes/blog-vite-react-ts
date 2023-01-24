import React, { HTMLAttributes, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { Container, StyledInput, StyledButton } from './styles';

type SearchInputProps = HTMLAttributes<HTMLInputElement>;

export const SearchInput: React.FC<SearchInputProps> = ({ ...rest }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePostSearch = () => {
    const inputValue = inputRef.current?.value;
    !inputValue || inputValue === ''
      ? searchParams.delete('title')
      : searchParams.set('title', inputValue || '');
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <StyledButton onClick={handlePostSearch}>
        <AiOutlineSearch color={'white'} size={20} style={{ margin: 'auto', display: 'block' }} />
      </StyledButton>
      <StyledInput placeholder={'Pesquisar'} ref={inputRef} {...rest} />
    </Container>
  );
};
