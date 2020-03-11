import React,{useState,useEffect} from 'react'
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;
const { SubMenu }    = Menu;

export default props => {
   const {httpSuccess} = React.Meili
    const [collapsed,setCollapsed] = useState(false);
    const [list,setList] = useState([]);
    useEffect(()=>{
      httpSuccess(['get','/crm/homemenu'],data=> setList(data))
    })

    return <Layout style={{ minHeight: '100vh' }}>
            {/* 左导航 */}
            <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)}>
             
              <div className="home_work">工作台</div>

              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              
              {/* 菜单输出模板 list数据在这渲染 */}
              <SubMenu key="sub1" title={<span><span>职员管理</span></span>}>
                    <Menu.Item key="1">职员列表</Menu.Item>
                    <Menu.Item key="2">添加职员</Menu.Item>
              </SubMenu>

              </Menu>
            </Sider>

            {/* 右边 */}
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '15px' }}>
                  <React.Meili.RouterView routers={props.routers}/>
              </Content>
            </Layout>
        </Layout>
}



