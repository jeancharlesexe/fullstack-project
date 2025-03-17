import React from "react";

import ThemeToggle from '../../components/ui/ThemeToggle'

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <a href="/login">Login</a>
    </>
  );
}