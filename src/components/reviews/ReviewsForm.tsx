"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";
{/* @ts-ignore */}
import ReactStars from "react-rating-stars-component";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [recommendation, setRecommendation] = useState("yes");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit the review data to your backend or handle it as needed
    // Reset the form fields after submission
    setRating(0);
    setReviewText("");
    setRecommendation("yes");
  };

  return (
    <Container maxWidth="lg">
      <form
        onSubmit={handleSubmit}
        className="review-form w-full flex flex-col gap-4"
      >
        <Typography variant="h4" gutterBottom>
          Add a Review
        </Typography>
        <ReactStars
          count={5}
          value={rating}
          size={20}
          edit={true}
          isHalf={true}
          activeColor="#ffd700"
        />
        <TextField
          label="Your Review"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        {/* <div className=" flex justify-between"> */}
          <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Would you recommend this product?
            </FormLabel>
            <RadioGroup
              row
              name="recommendation"
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<Send />}
            disabled={!rating || !reviewText}
          >
            Submit Review
          </Button>
        {/* </div> */}
      </form>
    </Container>
  );
};

export default ReviewForm;
