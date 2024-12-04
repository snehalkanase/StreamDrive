import React, { useEffect, useState } from "react";
import { checkType } from "../../utils/fileType";
import { setTime, setDate } from "../../utils/timeConverter";

const SharedFiles = ({ data, preview, text = "Files" }) => {
  const [fileTypes, setFileTypes] = useState({});

  const fetchFileTypes = async () => {
    const types = await Promise.all(
      data.map(async (item) => {
        const category = await checkType(item.type);
        return { [item.fileName]: category };
      })
    );
    const fileTypesObj = types.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    setFileTypes(fileTypesObj);
  };
  useEffect(() => {
    if (data?.length > 0) {
      fetchFileTypes();
    }
  }, [data]);

  return (
    <>
      <h2 className="text-lg md:text-xl lg:text-2xl mt-2 lg:mt-4">
        {text}
      </h2>
      {/* Filter files to show only those with folderId: null */}
      {data?.map((item, i) => (
        <div
          key={i}
          className="flex flex-col border md:flex-row w-full cursor-pointer bg-white hover:bg-gray p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 mb-3"
        >
          {/* File Name and Icon */}
          <div className="flex items-center w-full md:w-3/5 gap-3">
            <img
              className="w-8 h-8 object-cover"
              src={
                fileTypes[item.fileName] === "Document"
                  ? "/Logo/Recent/doc.svg"
                  : fileTypes[item.fileName] === "Video"
                    ? "/Logo/Recent/video.svg"
                    : fileTypes[item.fileName] === "Image"
                      ? "/Logo/Recent/image.svg"
                      : "/Logo/Recent/other.svg"
              }
              alt={item.fileName}
            />
            <p
              onClick={() => preview(true, item)}
              className="text-sm font-medium text-gray-700 truncate hover:text-green-500 cursor-pointer"
            >
              {item.fileName}
            </p>
          </div>

          {/* File Size, Last Access, and Name */}
          <div className="flex items-center gap-4 w-full md:w-2/5 justify-between mt-2 md:mt-0">
            <div className="text-xs md:text-sm text-gray-500">
              <p>{(item.size / 1024 / 1024).toFixed(1)} MB</p>
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              <p>Last Opened: {setTime(item.lAccess)}</p>
            </div>
            <div className="text-xs md:text-sm text-gray-500 hidden md:block">
              <p>{item.lName}</p>
            </div>
          </div>


        </div>
      ))}
    </>
  );
};

export default SharedFiles;
