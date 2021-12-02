import './App.css';
import AliReactTable from './ali-react-table'
import AntdTable from './andt-table'
import AntdTree from './andt-tree'


// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

moment.locale('zh-cn');


function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/ali-react-table">ali-react-table</Link>
        <span>---</span>
        <Link to="/antd-table">antd-table</Link>
        <span>---</span>
        <Link to="/antd-tree">antd-tree</Link>
        <Switch>
          <Route path="/ali-react-table">
            <AliReactTable></AliReactTable>
          </Route>
          <Route path="/antd-table">
            <AntdTable></AntdTable>
          </Route>
          <Route path="/antd-tree">
            <AntdTree></AntdTree>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
