import { useState, useEffect } from "react"

export default function Home() {

    const [text, setText] = useState('');
    const [post, setPost] = useState([]);

    useEffect(() => {
        const postFromLocalStorage = localStorage.getItem('post');
        if(postFromLocalStorage) {
            setPost(JSON.parse(postFromLocalStorage));
        }
        return;
    }, []);

    const shareHandle = (e) => {
        e.preventDefault();

        const newPost = {text, createdAt: new Date(), id: new Date().getTime('GMT-3')};
        const withNewPost = [...post, newPost];
        localStorage.setItem('post', JSON.stringify(withNewPost));

        setPost(withNewPost);
        setText('');
    }

    const deleteHandle = (id) => {
        const updatePost = post.filter((posts) => posts.id !== id);
        localStorage.setItem('post', JSON.stringify(updatePost));
        setPost(updatePost);
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <textarea value={text} cols={100} rows={Math.min(11, Math.max(4, Math.ceil(text.length / 92)))} maxLength={5000} onChange={(e) => setText(e.target.value)} className="w-1/2 h-full bg-black opacity-50 mt-2 pl-1 hover:border-blue-400 rounded-lg resize-none text-white focus:border-blue-500 focus:shadow-blue-500 focus:shadow-md"/>
            
            {/* <button type="button" onClick={shareHandle} className="bg-blue-500 text-white mt-2 px-4 py-1 rounded-3xl border-none hover:bg-blue-400" >Paylaş</button> */}




            <button onClick={shareHandle} type="" className="items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Paylaş
                </span>
            </button>




            <ul className="inline-block flex-col max-w-[85%] justify-center items-center justify-items-center list-none text-white ">
                {post.map((posts) => (
                    <li key={posts.id} className="!break-words mt-4 bg-black opacity-50 px-3 py-3 rounded-md">
                        {posts.text}
                        <button type="button" onClick={() => deleteHandle(posts.id)} 
                            className="bg-red-300 text-black hover:bg-red-400 px-4 py-1 ml-2 rounded-3xl">Sil</button>
                        <button type="button" 
                            className="bg-red-300 text-black hover:bg-red-400 px-4 py-1 ml-2 rounded-3xl">Düzenle</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}