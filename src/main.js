// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store'
import bus from './utils/bus'
import 'element-ui/lib/theme-chalk/display.css';
import '@/styles/index.less';
import '@/styles/myElement.less';
import { getRequest, postRequest } from './utils/request'
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Tooltip,
  Submenu,
  menuItemGroup,
  Input,
  button,
  Scrollbar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  breadcrumbItem,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Form,
  FormItem,
  Select,
  Option,
  Row,
  Col,
  Checkbox,
} from 'element-ui';

Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Submenu.name, Submenu);
Vue.component(menuItemGroup.name, menuItemGroup);
Vue.component(Input.name, Input);
Vue.component(button.name, button);
Vue.component(Scrollbar.name, Scrollbar);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(breadcrumbItem.name, breadcrumbItem);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Pagination.name, Pagination);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Checkbox.name, Checkbox);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.config.productionTip = false;

Vue.prototype.$bus = bus;
Vue.prototype.$getRequest = getRequest;
Vue.prototype.$postRequest = postRequest;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
