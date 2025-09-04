import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white text-center mt-10">
      <p className="text-sm">
        &copy; {year} Joseph Malongo Lugaho | DataSoft Solutions
      </p>
    </footer>
  );
}
