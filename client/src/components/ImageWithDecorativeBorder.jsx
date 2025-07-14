import React from "react";

const ImageWithDecorativeBorder = ({ src, alt, className = "" }) => {
  return (
    <div className={`relative inline-block p-2 bg-[#FAF7EF] ${className}`}>
      <div className="relative border-[4px] border-[#003B2F] rounded-md z-10">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-md"
        />
       
        <div className="absolute top-2 left-2 flex flex-col gap-[2px] rotate-45">
          <span className="w-3 h-[1.5px] bg-[#003B2F]" />
          <span className="w-3 h-[1.5px] bg-[#003B2F]" />
          <span className="w-3 h-[1.5px] bg-[#003B2F]" />
        </div>

     
        <div className="absolute bottom-2 right-2 flex flex-col gap-[2px] -rotate-45">
          <span className="w-3 h-[1.5px] bg-[#003B2F]" />
          <span className="w-3 h-[1.5px] bg-[#003B2F]" />
          <span className="w-3 h-[1.5px] bg-[#003B2F]" />
        </div>

     
        <div className="absolute top-1/2 left-1 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[#003B2F]" />

       
        <div className="absolute top-1/2 right-1 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[#003B2F]" />

      
        <div className="absolute top-1 left-1 text-xs text-[#003B2F] font-bold">+</div>

      
        <div className="absolute bottom-1 right-1 text-xs text-[#003B2F] font-bold">+</div>
      </div>
    </div>
  );
};

export default ImageWithDecorativeBorder;
