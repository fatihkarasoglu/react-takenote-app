import { useState, useEffect } from "react";

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

    const editHandle = () => {

    }

    return(
        <div className="min-w-min min-h-min justify-center">

            <div className="w-full flex justify-center items-center">
                <textarea value={text} cols={100} rows={Math.min(11, Math.max(4, Math.ceil(text.length / 92)))} maxLength={5000} 
                    onChange={(e) => setText(e.target.value)} name="textarea"
                    className="h-auto bg-black bg-opacity-50 mt-2 pl-2 pr-2 hover:border-blue-400 rounded-lg resize-none text-white focus:border-blue-500"/>
            </div>

            <div className="w-full flex justify-center items-center">
                <button type="button" onClick={shareHandle}
                    className="mt-2 px-7 py-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"> Paylaş
                </button>
            </div>

            <ul className="flex flex-col min-w-full h-auto list-none text-white items-center justify-center">
                {post.map((posts) => (
                    <li key={posts.id} className="max-w-[90%] !break-words break-all mt-2 px-3 py-3 rounded-md bg-black bg-opacity-50">
                        {posts.text}
                            <button type="button" onClick={() => deleteHandle(posts.id)} 
                                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 z-10 ml-2">
                                    Sil
                            </button>
                            <button type="button" onClick={editHandle}
                                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                    Düzenle
                            </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}