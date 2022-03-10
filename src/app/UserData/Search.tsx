import React, { useState } from 'react';
import { SearchInput } from '@patternfly/react-core';
import PaginationTable from './PaginationTable';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <SearchInput
        placeholder="Find by User"
        value={value}
        onChange={setValue}
        onSearch={setValue}
        onClear={() => setValue('')}
      />
      {/* <SimpleTable /> */}
      <PaginationTable />
    </>
  );
};

export default Search;
