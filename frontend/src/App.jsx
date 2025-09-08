import { CryptoContextProvider } from './context/crypto-context.jsx';
import { AppLayout } from './components/layout/AppLayout.jsx';

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'https://openapiv1.coinstats.app/coins';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         // 'X-API-KEY': 'vzMk2oSpmTAQNyj7f6pUi3ZK033MqEH119pvFUk18Pc='
  //       }
  //     };
  //
  //     try {
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // });

  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}

export default App;
