import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { get } from '@lib/get';
import { Category } from '@interfaces/category';
import { ExplorerFilterButton } from '@components/buttons/ExplorerFilterButton';
import { Container, FiltersGrid } from './styles';

export const ExplorerFilterBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const explorerButton = useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { data } = useQuery<Category[], Error>('categories', () => get('/categories'));

  const handleCategorySelection = (index: number, description: string) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      searchParams.has('category') && searchParams.delete('category');
    } else {
      setSelectedIndex(index);
      searchParams.set('category', description);
    }
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <FiltersGrid numberOfElements={(data && data.length) ?? 0}>
        {data &&
          data.map((cat, index) => {
            return (
              <ExplorerFilterButton
                key={index}
                text={cat.description}
                isSelected={selectedIndex === index}
                ref={explorerButton}
                onClick={() => handleCategorySelection(index, cat.description)}
              />
            );
          })}
      </FiltersGrid>
    </Container>
  );
};
