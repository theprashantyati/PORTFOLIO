const Review = require('../models/Review');

const dummyReviews = [
  {
    name: 'Pradum Kumar',
    role: 'MERN Stack Developer',
    rating: 4.9,
    comment: 'Prashant is an exceptional engineer to collaborate with! His skills in full-stack architecture, clean code, and API design are top-notch. He builds robust, production-grade solutions.',
    avatar_url: 'https://avatars.githubusercontent.com/u/10000001?v=4'
  },
  {
    name: 'Honey Atalkar',
    role: 'Software Engineering Student',
    rating: 4.8,
    comment: 'Collaborated with Prashant on PrepAI. His mastery over full-stack systems, FastAPI microservices, and Mistral LLM integration is incredibly impressive!',
    avatar_url: 'https://avatars.githubusercontent.com/u/10000002?v=4'
  },
  {
    name: 'Parth Gupta',
    role: 'Frontend Developer',
    rating: 4.7,
    comment: 'Working with Prashant on LetsChat was an amazing experience! The real-time Socket.io bi-directional messaging and Clerk auth integration made frontend integration seamless.',
    avatar_url: 'https://avatars.githubusercontent.com/u/10000003?v=4'
  },
  {
    name: 'Om Singhal',
    role: 'Backend Developer',
    rating: 4.8,
    comment: 'Prashant has tremendous system design and backend architecture skills. His Helpit AI code reviewer web app is fast, accurate, and cleanly engineered.',
    avatar_url: 'https://avatars.githubusercontent.com/u/10000004?v=4'
  },
  {
    name: 'Aditya Kumar',
    role: 'Coding Mentor',
    rating: 4.9,
    comment: 'A brilliant developer and problem solver. Prashant demonstrates exceptional algorithmic depth, great command over C++ DSA, and solid CS fundamentals.',
    avatar_url: 'https://avatars.githubusercontent.com/u/10000005?v=4'
  },
  {
    name: 'Akshat Sahu',
    role: 'Software Developer',
    rating: 4.9,
    comment: 'Excellent craftsmanship and attention to detail. The UI responsiveness, paper-fold origami aesthetics, and smooth micro-animations he built are truly remarkable!',
    avatar_url: 'https://avatars.githubusercontent.com/u/10000006?v=4'
  }
];

const mongoose = require('mongoose');
let inMemoryReviews = [...dummyReviews];

/**
 * @desc    Get all reviews (seeds dummy reviews if collection is empty)
 * @route   GET /api/reviews
 * @access  Public
 */
async function getReviews(req, res, next) {
  try {
    if (mongoose.connection.readyState === 1) {
      let reviews = await Review.find().sort({ createdAt: -1 });
      
      // Seed dummy reviews if the database has none
      if (reviews.length === 0) {
        console.log('Seeding dummy reviews into the database...');
        await Review.insertMany(dummyReviews);
        reviews = await Review.find().sort({ createdAt: -1 });
      }
      return res.status(200).json(reviews);
    }
    
    // In-memory fallback
    res.status(200).json(inMemoryReviews);
  } catch (error) {
    // If DB error, still fallback to dummy reviews
    res.status(200).json(inMemoryReviews);
  }
}

/**
 * @desc    Submit a new review
 * @route   POST /api/reviews
 * @access  Public
 */
async function submitReview(req, res, next) {
  try {
    const { name, role, rating, comment, avatar_url } = req.body;

    // 1. Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!role || !role.trim()) {
      return res.status(400).json({ success: false, message: 'Role or designation is required' });
    }
    if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: 'Rating must be a number between 1 and 5' });
    }
    if (!comment || !comment.trim()) {
      return res.status(400).json({ success: false, message: 'Review comment is required' });
    }

    if (name.length > 100) {
      return res.status(400).json({ success: false, message: 'Name cannot exceed 100 characters' });
    }
    if (role.length > 100) {
      return res.status(400).json({ success: false, message: 'Role cannot exceed 100 characters' });
    }
    if (comment.length > 1000) {
      return res.status(400).json({ success: false, message: 'Comment cannot exceed 1000 characters' });
    }

    const reviewData = {
      _id: 'rev_' + Date.now(),
      name: name.trim(),
      role: role.trim(),
      rating: Number(rating),
      comment: comment.trim(),
      avatar_url: avatar_url ? avatar_url.trim() : undefined,
      createdAt: new Date().toISOString()
    };

    if (mongoose.connection.readyState === 1) {
      const newReview = await Review.create({
        name: name.trim(),
        role: role.trim(),
        rating: Number(rating),
        comment: comment.trim(),
        avatar_url: avatar_url ? avatar_url.trim() : undefined
      });
      return res.status(201).json({
        success: true,
        message: 'Review submitted successfully! Thank you for your feedback.',
        data: newReview
      });
    }

    // In-memory save
    inMemoryReviews.unshift(reviewData);
    res.status(201).json({
      success: true,
      message: 'Review submitted successfully! Thank you for your feedback.',
      data: reviewData
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getReviews,
  submitReview
};
