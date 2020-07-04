import React, { Component } from 'react';
import Page from '../../components/PageLayout';
import { connect } from 'react-redux';
import { Button,  Dimmer, Loader } from 'semantic-ui-react'
import { findAll, deleteById } from '../../actions/propinsi.js';
import MUIDataTable from 'mui-datatables';


class PropinsiPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          error:null
        }
      }
    
    componentDidMount() {
        this.props.findAll();
    }

    componentDidUpdate() {
        const { data, error, deleteData, deleteError} = this.props;
        const { params } = this.state;    
        if (prevProps.data !== data) {
          this.setState({ data: this.props.data, total: this.props.data.total});
        } else if (prevState.params !== params || prevProps.deleteData !== deleteData || prevProps.data !== data) {
          this.reload();
        } else if (deleteError && prevProps.deleteError !== deleteError) {
          this.setState({error: deleteError})
        } else if(error && prevProps.error !== error) {
          this.setState({ error: error})
        }
    
    }

    render() {
        const {  loading} = this.props;
        const { data } = this.state;
        const getColumns = (onBtnClick) => [
            {
             name: "Id_Propinsi",
             label: "ID Propinsi",
             options: {
              filter: true,
              sort: true,
              sortDirection: this.state.sort
              }
            }, 
            {
              name: "Nama_Propinsi",
              label: "Nama Propinsi",
              options: {
               filter: true,
               sort: true,
               }
             },
             {
              name: "action",
              label: "Action",
              options: {
                filter: false,
                sort:false,
               customBodyRender: (value, tableMeta, updateValue) => {
                return (
                  <Button 
                    inverted 
                    color='blue' 
                    content='Detail'
                    onClick={() => onBtnClick(tableMeta.rowData) }
                  />
                );
                }
               }
             },
            ];
      return (
        <Page activePropinsi='Propinsi'>
            <h1>this is Propinsi</h1>
            <Button
            circular
            floated='right'
            icon='add'
            size='large'
            color='blue'
            onClick= {this.onAdd}
          />
          <MUIDataTable
            title={"Daftar Propinsi"}
            data={!loading ? data : []}
            columns={getColumns(this.onBtnClick)}
            options={
              {
                filter: false,
                viewColumns: false,
                selectableRows: 'single',
                serverSide: true,
                page: false,
                count: total,
                search:false,
                rowsPerPage: 10,
                rowsPerPageOptions: [2,10,20,100],
                onRowsDelete: this.onRowsDelete,
                onChangeRowsPerPage: this.onChangeRowsPerPage,
                onChangePage: this.onChangePage,
                onColumnSortChange: this.onColumnSortChange,
                onSearchChange: this.onSearchChange,
                textLabels: {
                  body: {
                    noMatch: loading ? 
                      <Dimmer active inverted>
                      <Loader size='medium' active inverted>Loading</Loader>
                      </Dimmer> : 'not found'
                  }
                }
              }
            }
          />
          <Button  
            inverted 
            loading={loading}
            floated='right'
            icon='sync alternate'
            color='blue' 
            content='Reload'
            onClick={this.onReload }
          />
        </Page>
      )
    };
}

const mapStateToProps = state => ({
  deleteData: state.deletePropinsiById.data,
  deleteError: state.deletePropinsiById.error,
  data: state.findPropinsis.data,
  loading: state.findPropinsis.loading || state.deletePropinsiById.loading,
  error: state.findPropinsis.error
});

const mapDispatchToProps = {
  deleteById, findAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PropinsiPage);