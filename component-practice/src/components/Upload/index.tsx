import { DragEventHandler, useState } from 'react';

export interface UploadProps {
  droppable?: boolean;
  name: string;
  onChange: (file: File | undefined) => void;
}

export default function Upload({
  droppable = true,
  name,
  onChange,
  ...props
}: UploadProps) {
  const [file, setFile] = useState<File | undefined>();
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const changedFile = files?.[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  }

  const handleDragEnter: DragEventHandler<HTMLLabelElement> = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragLeave: DragEventHandler<HTMLLabelElement> = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  const handleDragOver: DragEventHandler<HTMLLabelElement> = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(true);
  };

  const handleFileDrop: DragEventHandler<HTMLLabelElement> = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <div className='flex items-center justify-center w-full'>
      <label htmlFor="dropzone-file"
        onDrop={handleFileDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        {...props}
        className={`
        flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 

        ${dragging ? 'bg-gray-600' : 'bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'}
        `}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            {file ?
              <span className='text-blue-400'>{file.name}</span> :
              <span className="font-semibold">Click to upload or drag and drop</span>
            }
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input
          name={name}
          onChange={handleFileChange}
          id="dropzone-file"
          type="file"
          className="hidden" />
      </label>
    </div>
  );
}