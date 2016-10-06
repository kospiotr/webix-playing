var menu_data = [
  {
    id: "dashboard", icon: "dashboard", value: "Dashboards"
  },
  {
    id: "layouts", icon: "columns", value: "Layouts", data: [
    {id: "accordions", value: "Accordions"},
    {id: "portlets", value: "Portlets"}
  ]
  },
  {
    id: "tables", icon: "table", value: "Data Tables", data: [
    {id: "tables1", value: "Datatable"},
    {id: "tables2", value: "TreeTable"},
    {id: "tables3", value: "Pivot"}
  ]
  },
  {
    id: "uis", icon: "puzzle-piece", value: "UI Components", data: [
    {id: "dataview", value: "DataView"},
    {id: "list", value: "List"},
    {id: "menu", value: "Menu"},
    {id: "tree", value: "Tree"}
  ]
  },
  {
    id: "tools", icon: "calendar-o", value: "Tools", data: [
    {id: "kanban", value: "Kanban Board"},
    {id: "pivot", value: "Pivot Chart"},
    {id: "scheduler", value: "Calendar"}
  ]
  },
  {
    id: "forms", icon: "pencil-square-o", value: "Forms", data: [
    {id: "buttons", value: "Buttons"},
    {id: "selects", value: "Select boxes"},
    {id: "inputs", value: "Inputs"}
  ]
  },
  {id: "demo", icon: "book", value: "Documentation"}
];

var events = {
  onAfterSelect: function (id) {
    webix.message("Selectedddddd: " + this.getItem(id).value)
    menu_data.push({value: 'test'});
  }
};

module.exports = {
  data: menu_data,
  events: events
};