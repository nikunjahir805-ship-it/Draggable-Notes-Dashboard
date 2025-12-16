import React, { useRef, useState } from 'react';
import Card from './Card';
import { motion } from "framer-motion";

const Foregrond = () => {
  const containerRef = useRef(null);

  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (!input.trim()) return;

    // Generates a random number between 0.1 and 9.9
    const dynamicSize = (Math.random() * 10).toFixed(1);

    const unit = Math.random() > 0.5 ? "MB" : "KB";

    const newNote = {
      id: Date.now(),
      desc: input,
      filesize: `${dynamicSize}${unit}`,
      close: true,
      tag: { 
        isOpen: true, 
        tagTitle: "Download Now", 
        tagColor: Math.random() > 0.5 ? "green" : "blue" 
      },
    };

    setNotes(prev => [...prev, newNote]);
    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <>
      {/* Right-top panel */}
      <motion.div
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.2 }} className="fixed right-5 top-5 z-20 w-72 bg-zinc-900 p-4 rounded-xl">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your note..."
          className="w-full h-24 p-3 rounded-lg text-white bg-zinc-800 placeholder-white/50 outline-none resize-none mb-3 border border-zinc-700 focus:border-blue-500 transition-colors"
        />
        <button
          onClick={addNote}
          className="w-full py-2 bg-green-600 hover:bg-green-500   focus:border-blue-500 font-semibold transition-colors text-white rounded-lg"
        >
          Add Note
        </button>
      </motion.div>

      {/* Notes row */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 z-10 h-full w-full flex flex-nowrap gap-3 px-5 py-20 overflow-x-auto"
      >
        {notes.map(note => (
          <Card
            key={note.id}
            data={note}
            raframe={containerRef}
            onDelete={() => deleteNote(note.id)}
          />
        ))}
      </div>
    </>
  );
};
  export default Foregrond;