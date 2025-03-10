"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Ez1 has completely changed how we build websites. The AI-generated sites are not only beautiful but also functional right out of the box. We've cut our development time by 70%.",
    author: "Sarah Johnson",
    title: "CTO, TechVentures",
    rating: 5,
    avatar: "/avatars/client1.png",
  },
  {
    id: 2,
    content:
      "The prompt enhancer is a game-changer. I went from basic prompts to detailed instructions that get exactly what I need from AI models. It's like having an AI expert at your side.",
    author: "Michael Chen",
    title: "Product Designer, DesignFlow",
    rating: 5,
    avatar: "/avatars/client2.png",
  },
  {
    id: 3,
    content:
      "As a developer with limited Web3 experience, Ez1's tools have enabled me to build Solana dApps without having to learn all the complexities of blockchain development from scratch.",
    author: "Alex Rivera",
    title: "Indie Developer",
    rating: 4,
    avatar: "/avatars/client3.png",
  },
  {
    id: 4,
    content:
      "We needed a landing page for our startup in a hurry. Ez1 not only generated it in minutes but also deployed it automatically to Netlify. Incredible time-saver!",
    author: "Emily Watson",
    title: "Founder, LaunchFast",
    rating: 5,
    avatar: "/avatars/client4.png",
  },
];

const ClientFeedbackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white"
          >
            What Our Clients Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it.
            <br /> Here's what others are saying about Ez1.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto px-8">
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 md:p-10"
                  >
                    <div className="flex space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-neutral-300 dark:text-neutral-600"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden mr-4">
                        {/* This would be a real avatar image in production */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-blue-600 dark:bg-blue-500"
                    : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
