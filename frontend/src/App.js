import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  console.log(productData);
    useEffect(() => {
      (async () => {
        try {
          const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
    
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
    
          const data = await res.json();
          dispatch(setDataProduct(data));
        } catch (error) {
          console.error("Error fetching data:", error);
    
          // Log the response body only if it's available and the status code is not 200
          if (error.response && error.response.body) {
            console.log(await error.response.text());
          }
        }
      })();
    }, []);

  return (
    <>
      <Toaster />
      <div className="App">
        <Header />
        <main className="pt-24 bg-amber-50 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
