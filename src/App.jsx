import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/blogs' element={<Blogs />} />
				{/* <Route path="/blog/:idBlog"/> */}
				{/*  https://jsonplaceholder.typicode.com/posts/1/comments */}
				{/*  https://jsonplaceholder.typicode.com/guide/ */}

				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/*' element={<h1>NOT FOUND!</h1>} />
			</Routes>
			{/* FOOTER */}
		</div>
	);
}

export default App;
