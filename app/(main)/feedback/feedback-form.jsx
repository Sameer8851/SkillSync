"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { saveFeedback } from "@/actions/save-feedback";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeedbackForm() {
  const { user } = useUser();
  const [form, setForm] = useState({
    role: "",
    message: "",
    rating: "5",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const maxChars = 200;

  const isOverLimit = form.message.length > maxChars;
  const isEmpty = form.message.trim().length === 0;

  const handleMessageChange = (e) => {
    setForm({ ...form, message: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!user) {
  toast.error("Please sign in first to leave feedback.");
  return;

  }

  if (isOverLimit || isEmpty) {
    setShake(true);
    setTimeout(() => setShake(false), 500);
    return;
  }

  try {
    await saveFeedback({
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
      role: form.role,
      message: form.message,
      rating: form.rating,
    });
    setSubmitted(true);
  } catch (err) {
    setError("❌ Something went wrong. Please try again.");
    console.error("Feedback error:", err);
  }
};


  return (
    <Card className="bg-background border border-muted-foreground/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-white">Share Your Feedback</CardTitle>
        <CardDescription className="text-muted-foreground">
          Help us improve SkillSync and make it even better for users like you.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {submitted ? (
          <div className="text-green-500 font-medium text-center">
            🎉 Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your role (e.g., Student, SDE, PM)"
              className="bg-muted text-white"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />

            <Textarea
              required
              placeholder="What did you think of SkillSync?"
              className={`bg-muted text-white ${
                isOverLimit ? "border-red-500" : ""
              }`}
              value={form.message}
              onChange={handleMessageChange}
              rows={4}
            />
            <div className="flex justify-between text-sm">
              <span
                className={`${
                  isOverLimit ? "text-red-500" : "text-muted-foreground"
                }`}
              >
                {form.message.length}/{maxChars} characters
              </span>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">
                Rate your experience:
              </label>
              <select
                value={form.rating}
                onChange={(e) =>
                  setForm({ ...form, rating: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md bg-muted text-white border border-muted-foreground/30"
              >
                <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
                <option value="4">⭐️⭐️⭐️⭐️ Good</option>
                <option value="3">⭐️⭐️⭐️ Average</option>
                <option value="2">⭐️⭐️ Poor</option>
                <option value="1">⭐ Bad</option>
              </select>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isOverLimit || isEmpty}
            >
              Submit Feedback
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
