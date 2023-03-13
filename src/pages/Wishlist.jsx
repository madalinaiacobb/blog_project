import { useEffect, useState } from "react";
import { Button } from "reactstrap";

function Wishlist() {
	// Pasul 2- se creaza o variabila de stare pt datele noastre

	const [wishlistBlogs, setWishlistBlogs] = useState([]);
	// Pasul 1 - preluare date din local Storage

	useEffect(() => {
		const blogsString = localStorage.getItem("bloguri");
		if (blogsString !== null) {
			const blogs = JSON.parse(blogsString);
			setWishlistBlogs(blogs);
		}
	}, []);

	const onDelete = (blogId) => {
		const filteredBlogs = wishlistBlogs.filter((blog) => blog.id !== blogId);
		localStorage.setItem("bloguri", JSON.stringify(filteredBlogs));
		setWishlistBlogs(filteredBlogs);
	};

	return (
		<>
			<h2>Wishlist Page</h2>
			<ul>
				{wishlistBlogs.map((blog, index) => {
					return (
						<li key={"blog_" + index} className='mt-2'>
							{blog.title}
							<Button
								color='danger'
								onClick={() => {
									onDelete(blog.id);
								}}>
								Delete
							</Button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Wishlist;
