import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

export default function ReadBlog() {
    const { getBlog, blog } = useContext(AppContext);

    const {id} = useParams();

  useEffect(() => {
    getBlog(id);
  });
  return (
    <div className='container text-center my-5 border'>
      <div className='my-3' style={{fontWeight:'bold'}}>{blog.title}</div>
      <div className='my-3'><img src={blog.image} alt='' /></div>
      <div className='my-3'>{blog.content}</div>
    </div>
  )
}
