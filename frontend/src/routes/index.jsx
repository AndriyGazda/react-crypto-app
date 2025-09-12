import {Navigate, Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound.jsx";
import {ROUTES} from "./routes";
import {AppLayout} from "../components/layout/AppLayout.jsx";
import {AddAssetForm} from "../components/AddAssetForm.jsx";


const AppRoutes = () => {


  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigate to= {ROUTES.CRYPTO.CRYPTO_WALLET} replace/>}/>
      <Route path={ROUTES.CRYPTO.CRYPTO_WALLET} element={<AppLayout />} />
      <Route path={ROUTES.CRYPTO.CRYPTO_DETAILS()} element={}>
        <Route path={ROUTES.CRYPTO.CRYPTO_NEW_ASSET_SUCCESS} element={<Result />} />
      </Route>
      <Route path={ROUTES.CRYPTO.CRYPTO_NEW_ASSET} element={<AddAssetForm/>} />

      <Route path={ROUTES.NOT_FOUND} element={<NotFound />}/>
    </Routes>
  )
}

export default AppRoutes;