# Bookifyshop

BookifyShop - this is a web application for a book store, developed using React. It allows users to browse and purchase books online.

## Page Directory Structure

```
|--bookify/               -- core foldes
|   |-- node_modules/       -- Project dependencies
|   |-- public/             -- Public resources (HTML)
|   |   |-- index.html 
|   |-- src/                -- Source files
|   |   |-- actions/            -- Redux actions
|   |   |-- assets/             --  Static assets (images, icons)
|   |   |-- components/             -- All components
|   |   |   |-- Elements             -- Simple reusable elements
|   |   |   |-- Modules                 -- Complex components composed of simple elements
|   |   |   |-- ModulesForPages         -- Components used on pages
|   |   |-- css/
|   |   |-- pages/              -- Application pages
|   |   |-- scss/
|   |   |-- store/              -- Redux store setup
|   |   |-- utils/              -- Utility functions and helpers
|   |   |-- App.tsx             -- Main application component
|   |   |-- icons.d.ts              --TypeScript declaration file for icons
|   |   |-- index.tsx               -- Entry point of the application
|   |-- .gitingore              --Git ignore rules
|   |-- package-lock.json
|   |-- package.json
|   |-- tsconfig.json
|-- README.md
```
## Installation

To run this project, you need to have Node.js v18.15.0 installed.

1. Clone this repository to your local machine: https://github.com/KisliyBlin4ik/TMS-Bookifyshop.git
2. Navigate to the project's root directory: cd bookifyshop
2. Install project dependencies: npm install

## Usage

To start the application, use the following command: npm start

This will launch the development server, and you can access the application in your web browser at `http://localhost:3000`.

## Build

To create a production build of the application, use the following command: npm run build

## nodejs v18.15.0 required

## Contributors

- KisliyBlin4ik