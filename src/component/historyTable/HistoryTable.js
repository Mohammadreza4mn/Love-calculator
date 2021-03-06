import React, { useEffect } from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/action';

const myStyles = makeStyles((theme) => ({
  root: {
    direction: 'ltr'
  }
}));

function HistoryTable(props) {

  const styles = myStyles();

  const dispatch = useDispatch();

  const allData = useSelector(state => state.allData);
  const userData = useSelector(state => state.userData);
  const tableRow = useSelector(state => state.tableRow);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, disableClickEventBubbling: true },
    { field: 'girlName', headerName: 'Girl name', width: 120, disableClickEventBubbling: true },
    { field: 'boyName', headerName: 'Boy name', width: 120, disableClickEventBubbling: true },
    { field: 'interest', headerName: 'Interest', description: "percentage", disableClickEventBubbling: true },
    { field: 'description', headerName: 'Description', flex: 1, sortable: false, disableClickEventBubbling: true },
    { field: 'remove', headerName: 'Remove', width: 110, sortable: false, renderCell: () => (<IconButton size="small"><DeleteOutlineIcon /></IconButton >) }
  ];

  const updatetable = () => {

    allData.find((item) => {

      if (item.username === userData) {

        let flagRow = []
        item.results.map((result, index) => {
          flagRow.push({ id: index + 1, girlName: result.fname, boyName: result.sname, interest: result.percentage, description: result.result, remove: "del" })
        })
        dispatch({ type: actionTypes.setTableRow, payload: flagRow })
      }
    })
  };

  useEffect(() => {

    updatetable()

  }, [])

  const removeItem = (result) => {
    let flagAllData = allData

    flagAllData.find((item) => {

      if (item.username === userData) {

        item.results.splice(result - 1, 1)
        localStorage.setItem("love-calculator", JSON.stringify(flagAllData))
        updatetable()
      }
    })
  };

  return (
    <DataGrid loading={tableRow ? false : true} className={styles.root} rows={tableRow || []}
      columns={columns} pageSize={5}
      disableMultipleSelection={true} onRowSelected={(item) => removeItem(item.data.id)} />
  )
}

export default HistoryTable;