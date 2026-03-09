import { useState } from "react";

export default function AssetUpload() {

  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const simulateUpload = () => {

    let value = 0;

    const interval = setInterval(() => {

      value += 10;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setShowModal(true);
      }

    }, 300);
  };

  return (
    <>
      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-lg font-semibold mb-4">
          Upload Campaign Assets
        </h2>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            simulateUpload();
          }}
          className={`border-2 border-dashed p-10 text-center rounded
          ${dragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
        >
          Drag & Drop Files Here
        </div>

        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded mt-4">
            <div
              className="bg-green-500 text-white text-xs text-center p-1 rounded"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        )}

      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded shadow w-80 text-center">
            <h3 className="text-lg font-semibold mb-3">
              Upload Completed
            </h3>

            <p className="text-gray-600 mb-4">
              Your campaign assets were uploaded successfully.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
}