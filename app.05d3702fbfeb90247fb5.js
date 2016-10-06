webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

var viewport = __webpack_require__(33);

webix.ready(function () {
  webix.ui(viewport);
});

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* SideBar*/\n.webix_sidebar {\n    background: #fff;\n}\n\n.webix_sidebar .webix_tree_item {\n    color: #454545;\n    height: 35px;\n    line-height: 35px;\n}\n\n.webix_sidebar .webix_scroll_cont > .webix_tree_leaves {\n    padding: 0;\n}\n\n.webix_sidebar_selected {\n    background-color: #f2f2f2;\n}\n\n.webix_sidebar_expanded .webix_tree_item:hover {\n    background-color: #F6F6F6;\n}\n\n.webix_sidebar .webix_tree_item.webix_selected {\n    background-color: #F6F6F6;\n    box-shadow: 5px 0 #3498db inset;\n}\n\n.webix_sidebar .webix_tree_item.webix_selected span {\n    background-color: transparent;\n    padding-right: 0;\n}\n\n.webix_sidebar .webix_tree_branch_1 .webix_tree_item {\n    padding-left: 40px;\n}\n\n.webix_sidebar .webix_tree_branch_1 > .webix_tree_item {\n    height: 40px;\n    line-height: 40px;\n    padding-left: 0;\n}\n\n.webix_sidebar .webix_tree_branch_1 {\n    border-bottom: 1px solid #f5f5f5;\n}\n\n.webix_sidebar .webix_tree_item.webix_selected span, .webix_sidebar .webix_tree_item span {\n    margin: 0;\n    padding: 0px;\n\n}\n\n.webix_sidebar_icon {\n    width: 40px;\n    text-align: center;\n}\n\n.webix_sidebar .webix_tree_leaves .webix_tree_leaves {\n    margin-left: 0px;\n}\n\n.webix_sidebar_dir_icon {\n    float: right;\n    line-height: inherit;\n}\n\n/*Popup*/\n.webix_sidebar_popup {\n    padding: 0 !important;\n    border-radius: 0 !important;\n    margin-top: 0 !important;\n    border: none !important;\n    box-shadow: 2px 3px 3px #ddd;\n}\n\n.webix_sidebar_popup_right {\n    box-shadow: -1px 3px 3px #ddd;\n}\n\n.webix_sidebar_popup, .webix_sidebar_popup .webix_list_item,\n.webix_sidebar_popup .webix_win_body, .webix_win_body > .webix_view,\n.webix_sidebar_popup .webix_win_content {\n    border-radius: 0;\n}\n\n.webix_sidebar_popup_title.webix_selected .webix_template {\n    background-color: #F6F6F6;\n}\n\n.webix_sidebar_popup_title .webix_template {\n    line-height: 40px;\n    padding: 0 10px;\n    border: 1px solid #f5f5f5;\n    border-bottom-color: #ddd;\n    border-left: none;\n}\n\n.webix_sidebar_selected.webix_sidebar_popup_title .webix_template {\n    background: #f2f2f2;\n    border-left: none;\n}\n\n.webix_sidebar_popup_list .webix_list_item {\n    border-left: 1px solid #f2f2f2;\n    border-right: 1px solid #f5f5f5;\n}\n\n.webix_sidebar_popup_list .webix_list_item:first-child {\n    border-top: 1px solid #f5f5f5;\n}\n\n.webix_sidebar_popup_list .webix_list_item:hover {\n    background-color: #F6F6F6;\n}\n\n.webix_sidebar_popup_list .webix_list_item.webix_selected,\n.webix_sidebar_popup_list .webix_list_item.webix_selected:hover {\n    background-color: #F6F6F6;\n    box-shadow: 5px 0 #3498db inset;\n}", ""]);

// exports


/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./viewport.less", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./viewport.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./sidebar.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./sidebar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 31:
/***/ function(module, exports) {

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

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(34);
var menuController = __webpack_require__(31);


module.exports = {
  view: "sidebar",
  data: menuController.data,
  on: menuController.events
};

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(22);
var menu = __webpack_require__(32);

module.exports = {
  rows: [
    {
      view: "toolbar", css: 'header', padding: 3, elements: [
      {
        view: "button", type: "icon", icon: "bars",
        width: 37, align: "left", css: "app_button", click: function () {
        $$("$sidebar1").toggle()
      }
      },
      {view: "label", label: "My App"},
      {},
      {view: "button", type: "icon", width: 45, css: "app_button", icon: "envelope-o", badge: 4},
      {view: "button", type: "icon", width: 45, css: "app_button", icon: "bell-o", badge: 10}
    ]
    },
    {
      cols: [
        menu,
        {
          template: ""
        }
      ]
    }
  ]
};

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(23);

webix.protoUI({
  name: "sidebar",
  defaults: {
    titleHeight: 40,
    type: "sideBar",
    activeTitle: true,
    select: true,
    scroll: false,
    collapsed: false,
    collapsedWidth: 41,
    position: "left",
    width: 250,
    mouseEventDelay: 10
  },
  $init: function (config) {
    this.$ready.push(this._initSidebar);
    this.$ready.push(this._initContextMenu);
  },

  on_context: {},
  on_mouse_move: {},
  _initSidebar: function () {
    this._fullWidth = this.config.width;
    this.attachEvent("onBeforeOpen", function (id) {
      if (!this.config.multipleOpen)
        this.closeAll();
      return !this.config.collapsed;
    });
    this.attachEvent("onItemClick", function (id, ev, node) {
      if (this.getPopup() && !this.getPopup().config.hidden)
        ev.showpopup = true;
      if (webix.env.touch)
        this._showPopup(id, node);
    });
    this.attachEvent("onBeforeSelect", function (id) {
      if (!this.getItem(id).$count) {
        var selected = this.getSelectedId();
        if (selected && id != selected) {
          var parentId = this.getParentId(selected);

          this.removeCss(parentId, "webix_sidebar_selected");
        }
        return true;
      }
      return false;
    });
    this.attachEvent("onAfterSelect", function (id) {
      var parentId = this.getParentId(id);
      this.addCss(parentId, "webix_sidebar_selected");
      var title = this.getPopupTitle();

      title.callEvent("onMasterSelect", [id]);
    });
    this.attachEvent("onMouseMove", function (id, ev, node) {
      this._showPopup(id, node);
    });

    if (this.config.collapsed)
      this.collapse();
  },
  _showPopup: function (id, node) {
    if (this.config.collapsed) {
      var popup = this.getPopup();

      if (popup) {
        var title = this.getPopupTitle();
        if (title) {
          this._updateTitle(id);
        }
        var list = this.getPopupList();
        if (list) {
          this._updateList(id);
        }
        var x = (this.config.position == "left" ? this.config.collapsedWidth : -popup.config.width);
        popup.show(node, {x: x, y: -1});
      }
    }
  },
  _updateTitle: function (id) {
    var title = this.getPopupTitle();
    title.masterId = id;
    title.parse(this.getItem(id));
    var selectedId = this.getSelectedId();
    if (selectedId && this.getParentId(selectedId) == id) {
      webix.html.addCss(title.$view, "webix_sidebar_selected", true);
    }
    else {
      webix.html.removeCss(title.$view, "webix_sidebar_selected");
    }

    if (selectedId == id) {
      webix.html.addCss(title.$view, "webix_selected", true);
    }
    else {
      webix.html.removeCss(title.$view, "webix_selected");
    }
  },
  _updateList: function (id) {
    var list = this.getPopupList();
    list.masterId = id;
    var selectedId = this.getSelectedId();
    var data = [].concat(webix.copy(this.data.getBranch(id)));
    list.unselect();
    if (data.length) {
      list.show();
      list.data.importData(data);
      if (list.exists(selectedId))
        list.select(selectedId);
    }
    else
      list.hide();

  },
  _initContextMenu: function () {
    var config = this.config,
      popup;

    if (config.popup) {
      popup = webix.$$(config.popup);
    }
    if (!popup) {
      var dirClassName = (config.position == "left" ? "webix_sidebar_popup_left" : "webix_sidebar_popup_right");
      var popupConfig = {
        view: "popup",
        css: "webix_sidebar_popup " + dirClassName,
        autofit: false,
        width: this._fullWidth - this.config.collapsedWidth,
        borderless: true,
        padding: 0,
        body: {
          rows: [
            {
              view: "template", borderless: true, css: "webix_sidebar_popup_title",
              template: "#value#", height: this.config.titleHeight + 2,
              on: {
                onMasterSelect: function (id) {
                  var master = this.getTopParentView().master;
                  if (master && master.getParentId(id) == this.masterId) {
                    webix.html.addCss(this.$view, "webix_sidebar_selected", true);
                  }
                  if (master.config.collapsed && master.getItem(id).$level == 1) {
                    webix.html.addCss(this.$view, "webix_selected", true);
                  }
                }
              },
              onClick: {
                webix_template: function () {
                  var id = this.masterId;
                  var master = this.getTopParentView().master;
                  if (!master.getItem(id).$count)
                    master.select(id);
                }
              }
            },
            {
              view: "list", select: true, borderless: true, css: "webix_sidebar_popup_list", autoheight: true,
              on: {
                onAfterSelect: function (id) {
                  this.getTopParentView().master.select(id);
                }
              }
            }
          ]
        }
      };
      webix.extend(popupConfig, config.popup || {}, true);
      popup = webix.ui(popupConfig);
      popup.master = this;
    }
    popup.attachEvent("onBeforeShow", function () {
      return config.collapsed;
    });
    var master = this;
    var h = webix.event(document.body, "mousemove", function (e) {
      var trg = e.target || e.srcElement;
      if (!popup.config.hidden && !popup.$view.contains(trg) && !master.$view.firstChild.contains(trg)) {
        popup.hide();
      }
    });
    this.attachEvent("onDestruct", function () {
      if (webix.removeEvent)
        webix.removeEvent(h);
      if (popup)
        popup.destructor();
    });
    config.popupId = popup.config.id;
  },
  getPopup: function () {
    return webix.$$(this.config.popupId);
  },
  getPopupTitle: function () {
    var popup = this.getPopup();
    return popup.getBody().getChildViews()[0];
  },
  getPopupList: function () {
    var popup = this.getPopup();
    return popup.getBody().getChildViews()[1];
  },
  position_setter: function (value) {
    var newPos = value;
    var oldPos = value == "left" ? "right" : "left";

    webix.html.removeCss(this.$view, "webix_sidebar_" + oldPos);
    webix.html.addCss(this.$view, "webix_sidebar_" + newPos, true);

    var popup = this.getPopup();
    if (popup) {
      var popupEl = popup.$view;
      webix.html.removeCss(popupEl, "webix_sidebar_popup_" + oldPos);
      webix.html.addCss(popupEl, "webix_sidebar_popup_" + newPos, true);
    }
    return value;
  },
  collapse: function () {
    this.define("collapsed", true);
  },
  expand: function () {
    this.define("collapsed", false);
  },
  toggle: function () {
    var collapsed = !this.config.collapsed;
    this.define("collapsed", collapsed);
  },
  collapsed_setter: function (value) {
    var width;

    if (!value) {
      width = this._fullWidth;
    }
    else {
      width = this.config.collapsedWidth;
      this.closeAll();
    }

    if (!value) {
      this.type.collapsed = false;
      webix.html.addCss(this.$view, "webix_sidebar_expanded", true);
    }
    else {
      this.type.collapsed = true;
      webix.html.removeCss(this.$view, "webix_sidebar_expanded");
    }

    this.define("width", width);
    this.resize();

    return value;
  }
}, webix.ui.tree);

webix.type(webix.ui.tree, {
  name: "sideBar",
  height: "auto",
  css: "webix_sidebar",
  template: function (obj, common) {
    if (common.collapsed)
      return common.icon(obj, common);
    return common.arrow(obj, common) + common.icon(obj, common) + "<span>" + obj.value + "</span>";
  },
  arrow: function (obj, common) {
    var html = "";
    var open = "";
    for (var i = 1; i <= obj.$level; i++) {
      if (i == obj.$level && obj.$count) {
        var className = "webix_sidebar_dir_icon webix_icon fa-angle-" + (obj.open ? "down" : "left");
        html += "<span class='" + className + "'></span>";
      }
    }
    return html;
  },
  icon: function (obj, common) {
    if (obj.icon)
      return "<span class='webix_icon webix_sidebar_icon fa-" + obj.icon + "'></span>";
    return "";
  }
});

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".webix_layout_toolbar.webix_toolbar .header {\n  background-color: #5f5f5f;\n}\n", ""]);

// exports


/***/ }

});