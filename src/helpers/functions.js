import firebase from "./firebase";
import { useState, useEffect } from "react";
import { successToastify } from  "../helpers/toastNotify"

export const addBlog = (newBlog) => {
  const blogRef = firebase.database().ref("blog");
  blogRef.push(newBlog);
  successToastify("Added successfully");
};

export const useFetch = () => {
  const [blogList, setBlogList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const blogRef = firebase.database().ref("blog");
    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();

      const blogArray = [];
      for (let id in blogs) {
        blogArray.push({ id, ...blogs[id] });
      }
      setBlogList(blogArray);
      // setIsLoading(false)
    });
  }, []);

  return { blogList };
};
