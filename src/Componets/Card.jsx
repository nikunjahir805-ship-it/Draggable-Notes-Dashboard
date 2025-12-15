import React from "react";
import { Plus, Download, X } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ data, raframe, onDelete }) => {
  return (
    <div className="inline-block cursor-pointer">
      <motion.div
        drag
        dragConstraints={raframe}
        whileDrag={{ scale: 1.2 }}
        className="relative w-50 h-60 rounded-[25px] bg-zinc-900/50 text-white px-6 py-7 overflow-hidden"
      >
        <Plus size={18} />

        <p className="mt-7 text-sm leading-4 font-semibold">
          {data.desc}
        </p>

        <div className="absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between py-4 px-7">
            <h5>{data.filesize}</h5>

            {data.close ? (
              <X
                size={18}
                onClick={onDelete}
                className="cursor-pointer hover:opacity-80"
              />
            ) : (
              <Download size={18} />
            )}
          </div>

          {data.tag.isOpen && (
            <div
              className={`w-full py-3 ${
                data.tag.tagColor === "green"
                  ? "bg-green-600"
                  : "bg-blue-600"
              } text-white flex items-center justify-center`}
            >
              <h3>{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
