import { Outlet, useNavigate } from "react-router"
import { Layout, Flex, Button } from "antd"

import { Logo } from "../components/logo"

import './style.scss'


export const AuthLayout = () => {
    const { Header, Content, Footer } = Layout
    const navigate = useNavigate()

    return (
        <Layout className="">
            <Header className="header">
                <Flex justify="space-between" align="center">
                    <Logo />
                    <div className="header_button_container">
                    <Button color="orange" variant="solid" size="large" onClick={() => navigate('/auth/sign-in')} >Sign In</Button>
                    <Button color="orange" variant="solid" size="large" onClick={() => navigate('/auth/sign-up')}>Sign Up</Button>
                    </div>
                </Flex>
            </Header>
            <Content className="content">
                <Outlet />
            </Content>
            <Footer className="footer">TasksManager ©2026 Created by Kateryna</Footer>
        </Layout>
    )
}