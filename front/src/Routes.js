import {
  Routes,
  Route
} from "react-router-dom";

import Search from "./views/Search";
import List from "./views/List";
import Details from "./views/Details";
import Default from './template/default';

const CustomElement = ({ component: Component }) => {
  return (
    <Default>
      <Component />
    </Default>
  )
}

const AllRoutes = () => {
  return (
    <Routes>
      <Route index path="/" exact element={<CustomElement component={Search} />} />
      <Route path="/items" exact element={<CustomElement component={List} />} />
      <Route path="/items/:id" exact element={<CustomElement component={Details} />} />
      <Route path="*" element={<h1> 404 </h1>} />
    </Routes>
  );
}

export default AllRoutes;