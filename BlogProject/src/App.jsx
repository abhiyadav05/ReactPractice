import { useEffect, useState } from "react";
import conf from "./conf/conf"
import {useDispatch} from 'react-redux'
import service from "./appwrite/service";
import auth from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  // in the create react app project use variable name 
  // with react_app and access via the process but 
  // in the vite project use vite_ and access through the 
  // import.meta.env.vite_variable
      // console.log(conf.appWriteUrl);
      const [loading,setLoading]=useState(true);
      const dispatch=useDispatch();

      useEffect(()=>{
          auth.getCurrentUser()
          .then((userData)=>{
            if(userData){
              dispatch(login({userData}));
            }else{
              dispatch(logout());
            }
          })
          .finally(()=>setLoading(false))
      },[]);
      
      return !loading ? (
        <div className="bg-red">
          <div>
            <Header/>
            <main>
              <Outlet/>
            </main>
            <Footer/>
          </div>
        </div>
      ) : (null);
}

export default App
