import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'react-bootstrap-icons';

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    featuredImage: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({
        ...prev,
        featuredImage: file
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData(prev => ({
        ...prev,
        featuredImage: null
      }));
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      const blogPost = {
        user_id: 1, // This should come from your authentication system
        post_content: JSON.stringify({
          title: formData.title,
          content: formData.content,
          category: formData.category,
          featuredImage: formData.featuredImage ? formData.featuredImage.name : null
        }),
        created_at: new Date().toISOString()
      };

      console.log('Submitting blog post:', blogPost);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Blog post created successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Error creating blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-4">
              <button 
                onClick={() => navigate('/')}
                className="btn btn-link text-secondary text-decoration-none d-flex align-items-center p-0 me-3"
              >
                <ArrowLeft size={20} className="me-2" />
                Back
              </button>
              <h1 className="h4 mb-0 text-dark">Create a New Post</h1>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="featuredImage" className="form-label fw-bold">Featured Image</label>
                    <div 
                      className="text-center p-4 rounded" 
                      style={{ 
                        border: '2px dashed #ced4da', 
                        backgroundColor: '#f8f9fa',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <input
                        type="file"
                        id="featuredImage"
                        name="featuredImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="d-none"
                      />
                      {imagePreview ? (
                        <div>
                          <img src={imagePreview} alt="Preview" className="img-fluid rounded" style={{ maxHeight: '300px' }} />
                          <button 
                            type="button" 
                            className="btn btn-sm btn-danger mt-3"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, featuredImage: null }));
                              setImagePreview(null);
                            }}
                          >
                            Remove Image
                          </button>
                        </div>
                      ) : (
                        <label htmlFor="featuredImage" className="w-100" style={{ cursor: 'pointer' }}>
                          <Upload size={40} className="text-muted mb-2" />
                          <p className="mb-1 text-muted">Click to upload or drag and drop</p>
                          <p className="small text-muted">PNG, JPG, GIF up to 10MB</p>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Title</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter a captivating title"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="category" className="form-label fw-bold">Category</label>
                    <select
                      className="form-select form-select-lg"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a category</option>
                      <option value="technology">Technology</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="travel">Travel</option>
                      <option value="food">Food & Cooking</option>
                      <option value="health">Health & Wellness</option>
                      <option value="business">Business</option>
                      <option value="personal">Personal Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="content" className="form-label fw-bold">Content</label>
                    <textarea
                      className="form-control"
                      id="content"
                      name="content"
                      rows="10"
                      value={formData.content}
                      onChange={handleChange}
                      placeholder="Share your story..."
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      type="button"
                      onClick={() => navigate('/')}
                      className="btn btn-outline-secondary btn-lg"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                          Publishing...
                        </>
                      ) : (
                        'Publish Post'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;