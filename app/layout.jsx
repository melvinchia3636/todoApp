'use client';

import 'react-toastify/dist/ReactToastify.css';
import '../public/assets/fonts/MingCute.css';
import '../public/styles/globals.scss';
import '../public/styles/themes.scss';

import React from 'react';
import { toast } from 'react-toastify';
import ThemeContextWrapper from './themeContext';
import Main from './main';

export default function RootLayout({ children }) {
  const successAddTask = () => {
    toast.success('Task added successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <html data-theme="main" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeContextWrapper>
        <Main childrens={children} successAddTask={successAddTask} />
      </ThemeContextWrapper>
    </html>
  );
}
