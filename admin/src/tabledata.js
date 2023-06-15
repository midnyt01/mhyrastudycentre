export const  CustomerColumn = [
  { field: 'UserId', headerName: 'CustomerID', width: 90 },
  {
    field: 'FirstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'LastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'Email',
    headerName: 'Email',
    type: 'number',
    width: 200,
    editable: false,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 220,
    editable: false,
    valueGetter: (params) =>
      `${params.row.FirstName || ''} ${params.row.LastName || ''}`,
  },

];

export const CustomerRows = [
  { id: 1, lastName: "Byers", firstName: "Will", age: 35},
  { id: 2, lastName: "Wheeler", firstName: "Eleven", age: 42},
  { id: 3, lastName: "Hopper", firstName: "Jim", age: 45},
  { id: 4, lastName: "Wheeler", firstName: "Nancy", age: 16},
  { id: 5, lastName: "Harringon", firstName: "Max", age: null},
  { id: 6, lastName: "Bauman", firstName: "Murray", age: 150},
  { id: 7, lastName: "Sinclair", firstName: "Lucas", age: 44},
  { id: 8, lastName: "Clarke", firstName: "Robin", age: 36},
  { id: 9, lastName: "Bailey", firstName: "Bob", age: 65},
  { id: 10, lastName: "Wheeler", firstName: "Mike", age: 32}
];

export const  LeadsColumns = [
    { field: "LeadId", headerName: "LeadID", width: 90 },
    {
      field: "FullName",
      headerName: "Full name",
      width: 200,
      editable: false,
    },
    {
      field: "Email",
      headerName: "Email",
      type: "eail",
      width: 200,
      editable: false,
    },
    {
      field: "Service",
      headerName: "Service",
      type: "text",
      width: 100,
      editable: false,
    },
  ];

  
export const LeadsRows = [
  { id: 1, lastName: "Byers", firstName: "Will", age: 35, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown' },
  { id: 2, lastName: "Wheeler", firstName: "Eleven", age: 42, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'  },
  { id: 3, lastName: "Hopper", firstName: "Jim", age: 45, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'  },
  { id: 4, lastName: "Wheeler", firstName: "Nancy", age: 16, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'  },
  { id: 5, lastName: "Harringon", firstName: "Max", age: null, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'  },
  { id: 6, lastName: "Bauman", firstName: "Murray", age: 150, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'  },
  { id: 7, lastName: "Sinclair", firstName: "Lucas", age: 44, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'  },
  { id: 8, lastName: "Clarke", firstName: "Robin", age: 36, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'  },
  { id: 9, lastName: "Bailey", firstName: "Bob", age: 65, email: "test123@xyz.com", subject: 'hello world', message: 'hello worl  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknownd'  },
  { id: 10, lastName: "Wheeler", firstName: "Mike", age: 32, email: "test123@xyz.com", subject: 'hello world', message: 'hello world  lipsum as it is sometimes known, is dummy text'}
  ];