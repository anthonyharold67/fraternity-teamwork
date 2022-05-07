import './App.css';
import AuthContextProvider from './context/AuthContext';
import ProductContextProvider from './context/ProductContext';
import AppRouter from './router/AppRouter'
// import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ProductContextProvider>
        <AppRouter/>
        {/* <ToastContainer /> */}
      </ProductContextProvider>
      </AuthContextProvider>

      
    </div>
  );
}

export default App;

