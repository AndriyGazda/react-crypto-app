import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader.jsx';
import AppSider from './AppSider.jsx';
import AppContent from './AppContent.jsx';
import { useCrypto } from '../../context/crypto-context.jsx';

export const AppLayout = () => {
  const { loading } = useCrypto();

  if (loading) {
    return (
      <Spin
        fullscreen
        style={{
          backgroundColor: '#001529',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    );
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
};
