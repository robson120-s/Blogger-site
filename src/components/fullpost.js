import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PersonCircle } from 'react-bootstrap-icons';

// --- Mock Data (replace with API data) ---
const mockPost = {
  id: 1,
  title: 'Exploring the Alps: A Journey to Remember',
  author: 'Jane Doe',
  publishDate: 'October 26, 2023',
  imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop', // Example image from Unsplash
  content: `
    <p>The journey began with a single step, into the crisp morning air of the Swiss Alps. The air was thin but invigorating, carrying the scent of pine and distant snow. Our goal was to trek the famous Haute Route, a challenging path that winds from Chamonix to Zermatt, offering some of the most breathtaking vistas in the world.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
    <blockquote>"The mountains are calling and I must go." - John Muir</blockquote>
    <p>Every day brought new challenges and even greater rewards. We crossed glacial moraines, navigated steep ascents, and rested in charming mountain huts where we shared stories with fellow travelers from around the globe. The camaraderie forged in these remote locations is as memorable as the landscapes themselves. The Matterhorn, when it finally came into view, was a sight to behold—a majestic, pyramid-like peak piercing the sky. It was a humbling reminder of nature's grandeur and our small place within it.</p>
  `
};

const mockComments = [
  { id: 101, author: 'John Appleseed', text: 'What an incredible journey! The photos look stunning. I hope to do this trek one day.' },
  { id: 102, author: 'Sarah Miller', text: 'Thanks for sharing your experience. The quote from John Muir is one of my favorites!' },
];
// --- End of Mock Data ---


const FullPost = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return; // Prevent empty comments

    setIsSubmitting(true);
    // Simulate API call to post a new comment
    setTimeout(() => {
      const newCommentObject = {
        id: Math.random(), // Use a better ID in a real app
        author: 'CurrentUser', // This should come from your auth system
        text: newComment,
      };
      setComments([newCommentObject, ...comments]); // Add new comment to the top of the list
      setNewComment('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <div className="container py-4 py-md-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">

            {/* --- Back Button and Header --- */}
            <div className="mb-4">
              <button
                onClick={() => navigate('/')}
                className="btn btn-link text-secondary text-decoration-none d-flex align-items-center p-0"
              >
                <ArrowLeft size={20} className="me-2" />
                Back to All Posts
              </button>
            </div>

            {/* --- Blog Post Card --- */}
            <div className="card border-0 shadow-sm">
              <img src={mockPost.imageUrl} className="card-img-top" alt={mockPost.title} style={{maxHeight: '400px', objectFit: 'cover'}}/>
              <div className="card-body p-4 p-md-5">
                <h1 className="card-title mb-3">{mockPost.title}</h1>
                <div className="text-muted mb-4">
                  <span>By {mockPost.author}</span> | <span>{mockPost.publishDate}</span>
                </div>
                <div className="card-text fs-5" dangerouslySetInnerHTML={{ __html: mockPost.content }} />
              </div>
            </div>

            {/* --- Comments Section --- */}
            <div className="card border-0 shadow-sm mt-4">
              <div className="card-body p-4 p-md-5">
                <h2 className="h4 mb-4">Comments ({comments.length})</h2>

                {/* --- Add Comment Form --- */}
                <form onSubmit={handleCommentSubmit} className="mb-4">
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Write your comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                  </button>
                </form>

                {/* --- List of Comments --- */}
                <div className="comment-list">
                  {comments.map(comment => (
                    <div key={comment.id} className="d-flex mb-3 border-bottom pb-3">
                      <PersonCircle size={40} className="text-muted me-3" />
                      <div className="flex-grow-1">
                        <h6 className="fw-bold mb-0">{comment.author}</h6>
                        <p className="mb-0">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                  {comments.length === 0 && <p className="text-muted">Be the first to comment!</p>}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default FullPost;