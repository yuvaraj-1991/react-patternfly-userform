import React from 'react';
import { Pagination } from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class PaginationTable extends React.Component {
  columns: { title: string }[];
  defaultRows: { cells: { title: string }[] }[];
  defaultPerPage: number;
  constructor(props) {
    super(props);
    this.columns = [{ title: 'Name' }, { title: 'Age' }, { title: 'Gender' }, { title: 'Favourite Month' }];
    this.defaultRows = [
      {
        cells: [
          { title: 'Row 1 column 1' },
          { title: 'Row 1 column 2' },
          { title: 'Row 1 column 3' },
          { title: 'Row 1 column 4' },
        ],
      },
      {
        cells: [
          { title: 'Row 2 column 1' },
          { title: 'Row 2 column 2' },
          { title: 'Row 2 column 3' },
          { title: 'Row 1 column 4' },
        ],
      },
      {
        cells: [
          { title: 'Row 3 column 1' },
          { title: 'Row 3 column 2' },
          { title: 'Row 3 column 3' },
          { title: 'Row 1 column 4' },
        ],
      },
      {
        cells: [
          { title: 'Row 4 column 1' },
          { title: 'Row 4 column 2' },
          { title: 'Row 4 column 3' },
          { title: 'Row 1 column 4' },
        ],
      },
    ];
    this.defaultPerPage = 10;
    this.state = {
      perPage: this.defaultPerPage,
      page: 1,
      rows: this.defaultRows.slice(0, this.defaultPerPage),
    };
    this.handleSetPage = this.handleSetPage.bind(this);
    this.handlePerPageSelect = this.handlePerPageSelect.bind(this);
  }

  handleSetPage(_evt, newPage, perPage, startIdx, endIdx) {
    this.setState({
      page: newPage,
      rows: this.defaultRows.slice(startIdx, endIdx),
    });
  }

  handlePerPageSelect(_evt, newPerPage, newPage, startIdx, endIdx) {
    this.setState({
      perPage: newPerPage,
      page: newPage,
      rows: this.defaultRows.slice(startIdx, endIdx),
    });
  }

  renderPagination(variant = 'top') {
    const { page, perPage } = this.state;
    return (
      <Pagination
        isCompact
        itemCount={this.defaultRows.length}
        page={page}
        perPage={perPage}
        defaultToFullPage
        onSetPage={this.handleSetPage}
        onPerPageSelect={this.handlePerPageSelect}
        perPageOptions={[
          { title: '3', value: 3 },
          { title: '5', value: 5 },
          { title: '12', value: 12 },
          { title: '20', value: 20 },
        ]}
        titles={{
          paginationTitle: `${variant} pagination`,
        }}
      />
    );
  }

  render() {
    const rows = this.state.rows.map((row) => ({ cells: row.cells }));
    return (
      <React.Fragment>
        {this.renderPagination()}
        <Table aria-label="Automated pagination table" cells={this.columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}

export default PaginationTable;
