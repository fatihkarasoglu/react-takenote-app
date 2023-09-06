import { useState } from "react"

export default function Home() {

    const [text, setText] = useState('');

    return(
        <div className="flex flex-col justify-center items-center">
            <textarea 
                className="w-1/2 h-full bg-black opacity-50 mt-2 pl-1 hover:border-blue-400 rounded-lg resize-none text-white focus:border-blue-500 focus:shadow-blue-500 focus:shadow-md" 
                value={text} cols={100} rows={Math.min(11, Math.max(4, Math.ceil(text.length / 92)))} maxLength={5000} onChange={(e) => setText(e.target.value)} 
            />
        </div>
    )
}