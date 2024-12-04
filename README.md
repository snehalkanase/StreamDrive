# StreamDrive

## Description

The **StreamDrive** app is an intuitive and secure file storage and management platform. It enables users to upload, organize, share, and manage files with ease. The app is designed to prioritize user-friendly interactions and ensure safe data storage and accessibility. Users can log in securely using OTP (One-Time Password) and enjoy free storage space.

---

Demo Link - [StreamDrive]()

## Pages

- **Welcome Page**: The initial page that introduces the app's core features.
- **Dashboard (Your Files & Shared)**: A comprehensive view of both personal and shared files and folders.
- **Shared with me**: Displays files and folders that other users have shared with the logged-in user.
- **Deleted Items**: Shows all files and folders that were deleted but can still be recovered.
- **Personal Drive**: A dedicated space for users to store their own files and folders.
- **File Preview**: Allows users to view files before downloading or sharing them.

---

## Core Features

- **File Management**:
  - Upload Files: Easily upload documents, images, and other files.
  - Create Folders: Organize your content into folders for better management.
  - Upload Into Folders: Upload files directly to specific folders.
  - Edit File/Folder Names: Rename files or folders for clarity.
  - Move to Trash: Temporarily delete items, or permanently erase them.
  - Bulk Actions: Restore all deleted files at once, or permanently delete all.
  
- **Sharing**:

  - Collaborative Sharing: Share files with other users for easy collaboration.

- **File Preview**: View content before deciding to download or share.
- **Search and Sorting**:

  - File Count by Category: Quickly view how many files you have in each category.
  - Search Function: Find any file or folder by name or type.

- **Storage**:
  - Free 500MB Storage: Every user receives 500MB of storage at no cost.
- **Security**:
  - OTP-based Login: A secure login system using One-Time Passwords to protect user accounts.

---

# Project Structure and Technologies

## Folder Structure

### Backend

```bash
backend/
├── config/
│   ├── connection.js
│   ├── multer.js
├── controllers/
│   ├── authController.js
│   ├── deleteFolderController.js
│   ├── downloadController.js
│   ├── fileController.js
│   ├── folderController.js
│   ├── jwtVerifyController.js
│   ├── previewController.js
│   ├── restoreController.js
│   ├── trashController.js
├── models/
│   ├── file.js
│   ├── folder.js
│   ├── limitation.js
│   ├── user.js
├── routes/
│   ├── authRoutes.js
│   ├── deleteRoutes.js
│   ├── downloadRoutes.js
│   ├── fileRoutes.js
│   ├── folderRoutes.js
│   ├── previewRoutes.js
│   ├── trashRoutes.js
│   ├── restoreRoutes.js
```

### Frontend

```bash
frontend/
├── public/
│   ├── Logo/
├── src/
│   ├── pages/
│   ├── routes/
│   ├── utils/
├── App.jsx
├── app.css
├── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
```

### Environment Variables (.env)

```bash
MONGO_URL=<your-mongo-url>
EMAIL_USER=<your-email-user>
EMAIL_PASS=<your-email-password>
JWT_SECRET=<your-jwt-secret>
PORT=<your-port-number>
```

## Technologies Employed

### Frontend:

- **React**: A powerful JavaScript library used to build the user interface.
- **Tailwind CSS**: A powerful JavaScript library used to build the user interface.
- **Vite**: A fast and modern development environment for frontend projects.

### Backend:

- **Node.js**: A JavaScript runtime environment for building scalable and fast server-side applications.
- **Express.js**: A minimalist web framework for building APIs and server-side applications in Node.js.
- **MongoDB**: A NoSQL database for storing user data and file metadata.

### Storage:

- **Multer**: Middleware for handling file uploads in the form of multipart/form-data.
- **MongoDB**: For storing metadata related to files and users.

### Security:

- **JWT (JSON Web Token)**: A secure method for handling authentication and user sessions.

### File Management & Preview:

- **Custom Controllers**: Backend controllers built with Express.js for tasks like file uploads, downloads, sharing, and previewing files.

## Conclusion

The StreamDrive app provides a streamlined, secure, and intuitive file storage solution. With features like secure login via OTP, robust file sharing, and trash management, StreamDrive aims to be the go-to choice for individuals and teams looking for a reliable file storage platform. Whether you're managing personal files or collaborating with others, StreamDrive offers an easy and secure way to store and share your files.
