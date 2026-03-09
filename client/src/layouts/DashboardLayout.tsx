import { Outlet } from "react-router"
import { Layout } from "antd"

export const DashboardLayout = () => {
    const { Header, Content, Footer } = Layout

    return (
        <Layout>
            <Header>
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer>TasksManager ©2026 Created by Kateryna</Footer>
        </Layout>
    )
}