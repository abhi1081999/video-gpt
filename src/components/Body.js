import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {

    const routes = createBrowserRouter([
        {
            path : '/',
            element : <Login/>
        },{
            path : '/browse',
            element : <Browse/>
        }

    ]);
    return(
    <div>
        <RouterProvider router={routes} />
        {/* <Login/>
        <Browse/> */}
    </div>
    );
}

export default Body;