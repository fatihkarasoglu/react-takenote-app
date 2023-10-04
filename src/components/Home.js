import { useState, useEffect } from "react";

export default function Home() {

    const [text, setText] = useState('');
    const [post, setPost] = useState([]);

    useEffect(() => {
        const postFromLocalStorage = localStorage.getItem('post');
        if (postFromLocalStorage) {
            try {
                const parsedPost = JSON.parse(postFromLocalStorage);
                setPost(parsedPost);
            } catch (err) {
                console.error("Yerel depodan gönderiler alınırken bir hata oluştu:", err);
                setPost([]);
            }
        }
    }, []);

    const shareHandle = (e) => {
        e.preventDefault();

        const newPost = {createdAt: new Date(), id: new Date().getTime(), text};
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
                    onChange={(e) => setText(e.target.value)} name="textarea" placeholder="Bugün neler oldu?"
                    className="h-auto mt-2 pl-2 pr-2 rounded-lg resize-none border border-cyan-400 bg-cyan-300 bg-opacity-10"/>
            </div>

            <div className="w-full flex justify-center items-center">
                <button type="button" onClick={shareHandle}
                    className="mt-2 px-7 py-2 border text-cyan-600 border-cyan-400 bg-cyan-300 bg-opacity-10 hover:bg-cyan-400 hover:bg-opacity-20 font-medium rounded-lg text-sm text-center"> Paylaş
                </button>
            </div>

            <ul className="flex flex-col min-w-full h-auto list-none items-center justify-center">
                {post.map((item) => (
                    <li key={item.id} className="max-w-[90%] !break-words break-all mt-2 px-3 py-3 rounded-md border border-cyan-400 bg-cyan-300 bg-opacity-10">
                        {item.text}
                            <button type="button" onClick={() => deleteHandle(item.id)} 
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