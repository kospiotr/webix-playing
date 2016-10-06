webix.ready(function () {
  webix.ui({
    type: "head",
    //container: "testA",
    rows: [
      {
        template: "C 1",
        width: '300px',
        cols: [
          {template: "C 1"},
          {view: 'resizer'},//!empty
          {template: "C 1"}
        ]
      },
      {},
      {
        template: "C 2",
        cols: [
          {template: 'B1'},
          {template: 'B2'},
          {template: 'B3'}
        ]
      }
    ]
  });
});