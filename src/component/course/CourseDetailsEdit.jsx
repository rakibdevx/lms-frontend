import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { api } from '../../common/Config';
import axios from 'axios';

const CourseDetailsEdit = ({course}) => {
    const[titleError ,setTitleError  ] = useState();
    const[descriptionError ,setDescriptionError  ] = useState();
    const[categoryError ,setCategoryError  ] = useState();
    const[priceError ,setPriceError  ] = useState();
    const[discountError ,setDiscountError  ] = useState();
    const[flash_saleError ,setFlash_saleError  ] = useState();
    const[levelError ,setLevelError  ] = useState();
    const[is_featuredError ,setIs_featuredError  ] = useState();
    const[languageError ,setLanguageError  ] = useState();
    const[loading,setLoading ] = useState();
    const[serverError,setServerError ] = useState();
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));

    try {
      formData.append("_method", "PUT");
      const response = await axios.post(
        `${api}course/edit/${course.course.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${lmsUser.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Course updated successfully!");
    } catch (error) {
      if (error.response && error.response.data) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;
            if (errors.title) setTitleError(errors.title[0]);
            if (errors.description) setDescriptionError(errors.description[0]);
            if (errors.category_id) setCategoryError(errors.category_id[0]);
            if (errors.price) setPriceError(errors.price[0]);
            if (errors.discount_price) setDiscountError(errors.discount_price[0]);
            if (errors.flash_sale) setFlash_saleError(errors.flash_sale[0]);
            if (errors.level_id) setLevelError(errors.level_id[0]);
            if (errors.is_featured) setIs_featuredError(errors.is_featured[0]);
            if (errors.language_id) setLanguageError(errors.language_id[0]);
          } else if (error.response.data.message) {
            setServerError(error.response.data.message);
          }
        } else {
          toast.error("Something went wrong!");
        } 
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="help-block with-errors">
        <ul className="list-unstyled">
            <li>{serverError}</li>
        </ul>
    </div>
    <div className="main-form pt-15">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12">
                    <div className="singel-form form-group">
                        <label htmlFor="title">Course Title</label>
                        <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter Course Title"
                        defaultValue={course.course.title}
                        />
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{titleError}</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="singel-form form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                        id="description"
                        name="description"
                        placeholder="Enter Course Description"
                        rows="4"
                        defaultValue={course.course.description}
                        ></textarea>
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{descriptionError}</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="singel-form form-group">
                        <label htmlFor="category_id">Category</label>
                        <select id="category_id" name="category_id"  defaultValue={course.course.category_id}>
                        <option value="">Select Category</option>
                        {course.categories && course.categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{categoryError}</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="singel-form form-group">
                        <label htmlFor="price">Price</label>
                        <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Enter Price"
                        min="0"
                        step="0.01"
                        defaultValue={course.course.price}
                        />
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{priceError}</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="singel-form form-group">
                        <label htmlFor="discount_price">Discount Price</label>
                        <input
                        id="discount_price"
                        name="discount_price"
                        type="number"
                        placeholder="Enter Discount Price"
                        min="0"
                        step="0.01"
                        defaultValue={course.course.discount_price}
                        />
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{discountError}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="singel-form form-group">
                        <label htmlFor="level">Level</label>
                        <select
                        id="level"
                        name="level_id"
                        defaultValue={course.course.level_id}
                        >
                        <option value="">Select Level</option>
                        {course.levels && course.levels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{levelError}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="singel-form form-group">
                        <label htmlFor="level">language</label>
                        <select
                        id="language"
                        name="language_id"
                        defaultValue={course.course.language_id}
                        >
                        <option value="">Select Level</option>
                        {course.languages && course.languages.map((language) => (
                            <option key={language.id} value={language.id}>
                                {language.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{languageError}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="singel-form form-group">
                        <input
                        className="checkbox"
                        type="checkbox"
                        name="is_featured"
                        id="is_featured"
                        defaultChecked={course.course.is_featured} 
                        />
                        <label htmlFor="is_featured" className="ml-2">Featured</label>
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{is_featuredError}</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="singel-form form-group">
                        <input
                        className="checkbox"
                        type="checkbox"
                        name="flash_sale"
                        id="flash_sale"
                        defaultChecked={course.course.flash_sale} 
                        />
                        <label htmlFor="flash_sale" className="ml-2">Flash Sale</label>
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{flash_saleError}</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="singel-form">
                        <button type="submit" className="main-btn">
                        {loading ? (
                            <>
                                <i className="fa fa-spinner fa-spin mr-2"></i>
                                Updating...
                            </>
                            ) : (
                            "Update"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default CourseDetailsEdit