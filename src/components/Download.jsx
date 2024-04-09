import React from 'react';

const FileDownloader = () => {
  const handleDownload = () => {
    const fileUrl = './public/Deen.pdf';
    window.open(fileUrl, '_blank');
  };

  return (
    <a className='border-2 border-solid border-teal-500 px-3 py-2 font-mono text-md sm:text-xl rounded-sm border-opacity-30 text-slate-200 hover:border-teal-700 hover:ease-in-out duration-300 cursor-pointer' onClick={handleDownload}>Resume</a>
  );
};

export default FileDownloader;