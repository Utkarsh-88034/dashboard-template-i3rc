import { useEffect, useState } from 'react';

const useGetTableData = (voters, selectVoter) => {
  const [columnsData, setColumns] = useState();
  const [rowsData, setRows] = useState();

  const createColumn = (voters, selectVoter) => {
    if (voters?.length > 0 && voters[0]?.Upload_data) {
      const col = [];
      const showField = [
        'Voter ID',
        'Name',
        'Lok Sabha Name',
        'Gender',
        'Age',
        'Father or Husbands name',
        'Address',
      ];
      const fieldNames = Object.keys(voters[0].Upload_data);
      fieldNames.map((instance) => {
        const Fname = instance.replace(/_/g, ' ');
        if (Fname == 'id' || !showField.includes(Fname)) {
          const config = {
            name: Fname,
            selector: (row) => row[instance],
            omit: true,
          };
          col.push(config);
        } else {
          const config = {
            name: Fname,
            selector: (row) => (
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  selectVoter();
                }}
              >
                {row[instance]}
              </div>
            ),
            filterable: true,
            sortable: true,
          };
          col.push(config);
        }
      });

      setColumns(col);
    } else {
      return null;
    }
  };

  const createRows = (voters) => {
    const row = [];
    if (voters?.length > 0) {
      voters.map((voter) => {
        const tempData = voter.Upload_data ? voter.Upload_data : {};
        tempData['id'] = voter._id;
        row.push(tempData);
      });

      setRows(row);
    } else {
      return null;
    }
  };
  useEffect(() => {
    createRows(voters);

    createColumn(voters, selectVoter);
  }, [voters]);

  return { rowsData, columnsData };
};

export { useGetTableData };
