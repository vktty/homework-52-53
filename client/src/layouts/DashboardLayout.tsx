import { Outlet, useNavigate } from "react-router"
import { Button, Flex, Layout } from "antd"

import { Logo } from "../components/logo"
import { PlusOutlined } from "@ant-design/icons"


export const DashboardLayout = () => {
    const { Header, Content, Footer } = Layout
    const navigate = useNavigate()

    return (
        <Layout className="">
            <Header className="header">
                <Flex justify="space-between" align="center">
                    <Flex justify="space-between" align="center" gap={'20px'}>
                        <Logo />
                        <Button
                            color="orange"
                            variant="solid"
                            size="large"
                            onClick={() => navigate('/boards/create')}
                            className="create">
                            Create <PlusOutlined className="create__icon" />
                        </Button>
                    </Flex>
                    <Button
                        color="orange"
                        variant="solid"
                        size="large"
                        onClick={() => navigate('/auth/sign-in')}>
                        Sign Out</Button>
                </Flex>
            </Header>
            <Content className="content">
                <Outlet />
            </Content>
            <Footer className="footer">TasksManager ©2026 Created by Kateryna</Footer>
        </Layout>
    )
}