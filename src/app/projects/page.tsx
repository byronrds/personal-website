"use client";
import { LinkList } from "@/components/LinkList";
import { RxDotFilled } from "react-icons/rx";

export default function page() {
  return (
    <div>
      <div className="lg:w-1/2 lg:m-auto">
        <div className="fixed w-2 h-full bg-[#dc423b]"></div>
        <div className="px-8 lg:px-12 py-8">
          <LinkList />
        </div>
        <div className="mx-10 my-4 flex flex-col gap-6">
          <div>
            <p className="text-md mb-2 font-semibold">Recipe App</p>
            <p className="text-md">
              A full-stack recipe discovery app that fetches recipe data and
              images from the Edamam API, with save functionality to a Firestore
              database. Integrated an OpenAI-powered chatbot to provide cooking
              assistance and personalized recipe recommendations.
            </p>
            <div className="mt-1 text-md opacity-50 flex flex-wrap gap-2 items-center sm:flex-row sm:gap-2 sm:items-center">
              <p>React</p>
              <RxDotFilled />
              <p>Express.js</p>
              <RxDotFilled />
              <p>OpenAI</p>
              <RxDotFilled />
              <p>Firestore</p>
            </div>
          </div>
          <br></br>
          <div>
            <p className="text-md mb-2 font-semibold">Local Flashcards App</p>
            <p className="text-md">
              A Quizlet-style flashcard application built with PHP and MySQL,
              hosted locally via XAMPP. Designed to help users create, manage,
              and review study decks in an offline environment.
            </p>
            <div className="mt-1 text-md opacity-50 flex flex-wrap gap-2 items-center sm:flex-row sm:gap-2 sm:items-center">
              <p>PHP</p>
              <RxDotFilled />
              <p>XAMPP</p>
              <RxDotFilled />
              <p>MySQL</p>
            </div>
          </div>

          <br></br>
          <div>
            <p className="text-md mb-2 font-semibold">Talent Board</p>
            <p className="text-md">
              A Next.js app for building and sharing resumes with potential
              employers. Integrates with AirTable for backend management,
              enabling seamless filtering and messaging between talent and
              companies.
            </p>
            <div className="mt-1 text-md opacity-50 flex flex-wrap gap-2 items-center sm:flex-row sm:gap-2 sm:items-center">
              <p>Next.js</p>
              <RxDotFilled />
              <p>Airtable</p>
            </div>
          </div>

          <br></br>
          <div>
            <p className="text-md mb-2 font-semibold">Personal Portfolio</p>
            <p className="text-md">
              This app! A simple, clean portfolio showcasing my work. Built with
              Next.js, styled with Tailwind CSS, and connected to Google
              Firestore for blog data.
            </p>
            <div className="mt-1 text-md opacity-50 flex flex-wrap gap-2 items-center sm:flex-row sm:gap-2 sm:items-center">
              <p>Next.js</p>
              <RxDotFilled />
              <p>Tailwind</p>
              <RxDotFilled />
              <p>Google Firestore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
