import { useState } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {

    const [blogs, setBlogs] = useState([]);

    const [blog, setBlog] = useState([]);

    //Get all blogs
    const getBlogs = async () => {
        const response = await fetch('http://localhost:3004/parks', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        setBlogs(json)
    }

    //Get a blog
    const getBlog = async (id) => {
        const response = await fetch(`http://localhost:4000/api/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        setBlog(json);
        console.log(blog)
    }

    // Add a blog
    const addBlog = async (title, category, content) => {
        await fetch('http://localhost:4000/api', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, category, content }),
        });

    }


    //Edit a blog
    const editBlog = async (id, title, category, content) => {
        const response = await fetch('http://localhost:4000/api', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, title, category, content }), // body data type must match "Content-Type" header
        });

        console.log(response.json());
    }


    //Delete a blog
    const deleteBlog = async (id) => {
        await fetch('http://localhost:4000/api', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }), // body data type must match "Content-Type" header
        });
    }



    return (
        <BlogContext.Provider value={{ blog, setBlog, blogs, setBlogs, addBlog, getBlog, getBlogs, deleteBlog, editBlog }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;