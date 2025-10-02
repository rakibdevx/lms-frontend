import React, { useState, useEffect } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import axios from "axios";
import { toast } from "react-hot-toast";
import { api } from "../../common/Config";
import Swal from "sweetalert2";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImageUpload = ({ course}) => {
  const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (course.course.thumbnail_full) {
      setImage(course.course.thumbnail_full);
    }
  }, []);

  const handleUpdateFiles = async (fileItems) => {
    try {
      setError("");
      const file = fileItems[0]?.file;
      if (!file) {
        toast.error("No file selected!");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `${api}course/image/${course.course.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${lmsUser.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFiles('');
      setImage(response.data.image);
      toast.success("Image uploaded successfully!");
    } catch (err) {
      console.error("Upload Error:", err);
      if (err.response?.data) {
        if (err.response.data.errors) {
          setError(err.response.data.errors.image?.[0] || "Validation error");
        } else if (err.response.data.message) {
          setError(err.response.data.message);
        }
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const handleRemoveFile = (e) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
                await axios.get(`${api}course/image/delete/${e}`, {
                    headers: { Authorization: `Bearer ${lmsUser.token}` },
                });
                toast.success("Image deleted successfully");
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Image has been deleted.",
                    icon: "success"
                });
                setImage('');
            } catch (error) { 
                toast.error("Failed to delete Image");
                console.log(error);
            }
        }
    });
  };

  return (
    <div className="contact-from mt-30 pl-4 pr-4">
      <div className="section-title">
        <h5>Thumbnail Image</h5>
      </div>
      <div className="main-form pt-15">
        {error && (
          <div className="help-block with-errors mb-2">
            <ul className="list-unstyled">
              <li>{error}</li>
            </ul>
          </div>
        )}
        <FilePond
          files={files}
          allowMultiple={false}
          onupdatefiles={(fileItems) => {
            setFiles(fileItems);
            if (fileItems.length > 0 && fileItems[0].file) {
              handleUpdateFiles(fileItems);
            }
          }}
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </div>
      <div className="image-div"
      >
        {image && (
          <>
            <img
              src={image}
              alt="Thumbnail"
              className="thumb-image"
            />
            <button className="image-btn" onClick={() => handleRemoveFile(course.course.id)}>
              &times;
            </button>
          </>
        )}
      </div>

    </div>
  );
};

export default ImageUpload;