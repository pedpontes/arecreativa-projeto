"use client"

import React from 'react';
import "./globals.css";
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Header, Content } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


export default function RootLayout ({
    children
}: Readonly<{ 
        children: React.ReactNode }>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body>
            <Layout className='h-full'>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="demo-logo" />
                    <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{ flex: 1, minWidth: 0 }}
                    />
                </Header>
                <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </body>
    </html>
  );
};
