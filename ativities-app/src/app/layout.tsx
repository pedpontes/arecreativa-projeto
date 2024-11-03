"use client"

import "./global.css";
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import ModalActionProvider from "./contexts/ActionModalContext";

const { Header, Content } = Layout;

export default function RootLayout ({
    children
}: Readonly<{ 
        children: React.ReactNode }>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
        <head>
            <title>A Recreativa</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
            <body>
            <ModalActionProvider>
                <Layout className='h-full'>
                    <Header style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="demo-logo" />
                        <Menu
                        items={[{
                            key: '1',
                            label: <Link href={"/"}>Inicio</Link>
                        }]}
                        theme="dark"
                        mode="horizontal"
                        style={{ flex: 1, minWidth: 0 }}
                        />
                    </Header>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: "100vh",
                                maxHeight: "max-content",
                                width: "100%",
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </ModalActionProvider>
        </body>
    </html>
  );
};
