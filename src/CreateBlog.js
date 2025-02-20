import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
    
        fetch('http://localhost:8001/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)

        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        })
    }

    return (  
        <div className="create-blog">
            <h2>Add a New Blog</h2>
        
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /> 

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                
                ></textarea>

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    
                > 
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>

                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Loading...</button>}
       

            </form>
        </div>
    );
}
 
export default CreateBlog;