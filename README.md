# Odin Library
![App Screenshot]("src/assets/app-screenshot.png")

### Overview
The Odin Project Library is a single-page frontend application built with Vite, React, and TypeScript. This mini project allows users to manage their personal book collection with features to add, edit, and remove books. Styled using Sass with BEM naming conventions, the application provides a clean and intuitive interface for interacting with your library.

### Features
- Add Books: Users can input book details such as author, title, number of pages, and read status using a user-friendly form.
- Edit Books: Modify existing book details directly from the interface.
- Remove Books: Delete books from the library with a single click.
- Toggle Read Status: Easily update whether a book has been read or not.

### Technologies Used
- Frontend: React, TypeScript
- Build Tool: Vite
- Styling: Sass (BEM naming conventions)

### Getting Started
1. Clone the Repository

```bash 
git clone <repository-url>
cd <repository-folder>
```
2. Install Dependencies

```bash
npm install
```
3. Run the Application

```bash
npm run dev
```
Open your browser and go to http://localhost:3000 to view the application.

### Project Structure
- src: Contains all source code files.
  - components: React components for various parts of the application. Each component is housed inside of a directory with the same name and includes its corresponding style sheet.
  - types: TypeScript interfaces and types.
  - App.tsx: Main application component.
  - index.tsx: Entry point for the React application.

### Usage
- Add a New Book: Click on the "Add BOOK" button to open a form. Fill in the book details and submit.
- Display Books: Books are displayed in a user-friendly format, either in a table or individual cards.
- Edit or Remove Books: Use the provided buttons on each book’s display to make changes or delete the book.
- Toggle Read Status: Use the button provided on each book’s display to mark the book as read or unread.

### Notes
- Ensure that you handle form submissions properly using event.preventDefault() to avoid default form behavior that attempts to send data to a server.

### Contributing
Feel free to fork the repository and submit pull requests. Any contributions are welcome!
