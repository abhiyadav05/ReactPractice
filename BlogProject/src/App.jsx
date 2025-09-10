import conf from "./conf/conf"


function App() {
  // in the create react app project use variable name 
  // with react_app and access via the process but 
  // in the vite project use vite_ and access through the 
  // import.meta.env.vite_variable
      console.log(conf.appWriteUrl);
  return (
    <>
      <div>
       This is blog with appwright
      </div>
      
    </>
  )
}

export default App
