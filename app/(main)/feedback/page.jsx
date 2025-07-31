"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getAllFeedback } from "@/actions/get-feedback";
import { deleteFeedback } from "@/actions/delete-feedback";
import FeedbackWrapper from "./feedback-wrapper";
import FeedbackCard from "./feedback-card";

export default function FeedbackPage() {
  const { user } = useUser();
  const [feedbacks, setFeedbacks] = useState([]);
  const [deletingId, setDeletingId] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllFeedback();
      setFeedbacks(res);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      setTimeout(async () => {
        await deleteFeedback(id);
        setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
        setDeletingId(null);
      }, 300); 
    } catch (err) {
      console.error("❌ Delete failed:", err);
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 space-y-10">
      <FeedbackWrapper />

      <div>
        <h2 className="text-2xl font-semibold mb-6">What others are saying:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <FeedbackCard
              key={fb.id}
              feedback={fb}
              canDelete={user?.id === fb.userId}
              onDelete={() => handleDelete(fb.id)}
              isDeleting={deletingId === fb.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
