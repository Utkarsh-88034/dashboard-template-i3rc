import React, { useEffect, useState } from 'react';

const useGetTableData = (voters) => {
  const [columnsData, setColumns] = useState();
  const [rowsData, setRows] = useState();

  const createColumn = (voters) => {
    if (voters[0]) {
      const col = [];
      const fieldNames = Object.keys(voters[0].Upload_data);
      fieldNames.map((instance) => {
        const config = {
          name: instance,
          selector: (row) => row[instance],
          filterable: true,
          sortable: true,
        };
        col.push(config);
      });

      setColumns(col);
    } else {
      return null;
    }
  };

  const createRows = (voters) => {
    const row = [];
    if (voters != []) {
      voters.map((voter) => {
        const tempData = voter.Upload_data;
        // tempData['id'] = voter._id;
        row.push(tempData);
      });
      setRows(row);
    } else {
      return null;
    }
  };
  useEffect(() => {
    createRows(voters);
    createColumn(voters);
  }, [voters]);

  return { rowsData, columnsData };
};

export { useGetTableData };
