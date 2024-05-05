import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {   
    const { data: blogs, isPending, error } = useFetch('http://localhost:8001/blogs');
    return (
        <div className="home">
            {error && <div> {error}</div>} 
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs= {blogs} title='All blogs'/>}
        </div>
      );

}

// sample code on what how to use the useEffect hook
/*
const Home = () => {
    
    const [blogs, setBlogs] = useState([
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
          ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // const [funname, setFunname] = useState('mario');

    useEffect(()=>{
        console.log('use effect was run');
        console.log(funname);
    }, []);
          
    return (
        <div className="home">
            <BlogList blogs= {blogs} title='All blogs' handleDelete={handleDelete}/>
        </div>
      );

}
*/


// sample code on how to use the useState hook
/*
const Home = () => {
    
    // the folowing are examples of using state hooks. 
    // Here we are using the useState hook to create a state variable. 
    // The first value is the initial value of the state variable. 
    // The second value is the function that will be used to update the state variable.   
    const [name, setName] = useState('mario'); 
    const [age, setAge] = useState(25);
    
    // e is an event object that is autonatically passed by the browser
    const handleClick = (e) => {
        // console.log('hello, ninjas', e);
        setName('luigi');
        setAge(Math.random() * 50);
    }
    
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            
            <button onClick={handleClick} >Click me</button> 

            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> 
        </div>
      );
}
*/


export default Home;