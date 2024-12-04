import React, { useEffect, useState } from 'react';
import doc from '/Logo/Stats/doc.svg';
import image from '/Logo/Stats/image.svg';
import other from '/Logo/Stats/other.svg';
import video from '/Logo/Stats/video.svg';
import ProgressBar from '../Common/ProgressBar';
import { checkFile } from '../../utils/fileType'; // Assuming checkFile is updated to handle size

function Stats({ data, data2 }) {
  const [datas, setData] = useState([
    { type: "image", quantity: 0, totalSize: 0 },
    { type: "video", quantity: 0, totalSize: 0 },
    { type: "document", quantity: 0, totalSize: 0 },
    { type: "other", quantity: 0, totalSize: 0 },
  ]);

  useEffect(() => {
    const fetchFileTypes = async () => {
      // Prepare the data array with file types and sizes
      const fileDetails = data.map(item => ({ fileType: item.type, size: item.size }));
      const updatedData = await checkFile(fileDetails);
      setData(updatedData);
    };

    fetchFileTypes();
  }, [data]);

  return (
    <div className="lg:p-4 p-2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 font-inter">
      {datas.map((item, i) => (
        <div key={i} className="bg-gray-300 border p-3 rounded-lg shadow-xl hover:shadow-4xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
          {/* Card Header */}
          <div className="flex flex-row items-center space-x-2">
            <div className="w-14 h-14 bg-gray-200 flex justify-center items-center rounded-xl">
              <img
                src={item.type === 'image' ? image : item.type === 'video' ? video : item.type === 'document' ? doc : other}
                alt="icon"
                className="w-8 h-8"
              />
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-800">
                {item.type === 'image' ? 'Images' : item.type === 'video' ? 'Videos' : item.type === 'document' ? 'Docs' : 'Others'}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-teal-600">{item.quantity}</span> Items
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className='w-full hidden  mt-3 md:flex flex-col   items-start'>
            <ProgressBar
              total={data2.doc} // Replace with total size if available
              available={((item.totalSize)/1024/1024).toFixed(1)}
              px={0}
            />
            <p className="p-1 text-[12px]">{((item.totalSize)/1024/1024).toFixed(1)} MB OF {data2.doc} MB</p>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Stats;
