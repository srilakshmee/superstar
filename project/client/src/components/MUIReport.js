import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class MUIReport extends React.Component {
  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable:
      {
        responsiveScroll:
        {
          maxHeight: '100%',
          overflow: 'visible',
        }
      },
      MuiTableRow: {
        head: {
          color: '#000',
        },
      },
      MuiTableCell: {
        root: {
          color: '#000',
          fontFamily: 'inherit',
          fontSize: '1rem',
          padding: '.2rem .2rem'
        },
        head: {
          color: '#000',
          fontWeight: '700',
          fontSize: '1rem',
        },
        body:{
          maxWidth:'15em'
        }
      },
      MuiIconButton: {
        root: {
          color: '#000',
        }
      },
      MuiCheckbox: {
        root: {
          //color:'#000',
        }
      }
    }
  })

  render() {
    var reportData = [];

    if (this.props.data && this.props.colnames) {
      this.props.data.map((item, rowid) => {
        var rowData = [];
        this.props.colnames.map((colname, id) => {
            rowData.push(item[colname]);
        })
        reportData.push(rowData);
      })
    }


    const options = {
      filterType: "dropdown",
      responsive: "scrollMaxHeight",
      selectableRows: "none",
      downloadOptions: { filename: 'tableDownload.csv', separator: ',' , filterOptions: {useDisplayedColumnsOnly: true, useDisplayedRowsOnly: true}}
    };

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={this.props.reportname}
          data={reportData}
          columns={this.props.colnameheaders}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}
export default MUIReport;
