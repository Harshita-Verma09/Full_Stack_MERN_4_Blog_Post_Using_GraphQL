#  Blog Post Using GraphQl

A full-stack GraphQL blog application built with React, Apollo Client, and GraphQL API. Create, read, and delete blog posts with a beautiful modern UI.

##  Features

- **GraphQL API** - Efficient data querying and mutations with Apollo Server
- **MongoDB Database** - Persistent storage for blog posts
- **React Frontend** - Modern UI with Vite build tool and Apollo Client
- **Create Posts** - Add new blog posts with title and content
- **View Posts** - Browse all published posts with creation dates
- **Beautiful UI** - Glass-morphism design with gradient background and animated blobs
- **CORS Enabled** - Secure cross-origin requests between frontend and backend






##  Project Structure

```
3_Blog_Post/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection configuration
│   ├── models/
│   │   └── Post.js              # Mongoose Post schema
│   ├── schema/
│   │   ├── typeDefs.js          # GraphQL type definitions
│   │   └── resolvers.js         # GraphQL resolvers for queries/mutations
│   ├── server.js                # Express & Apollo Server setup
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── PostForm.jsx     # Form to create new posts
    │   │   ├── PostList.jsx     # Display all posts
    │   │   └── PostItem.jsx     # Individual post component
    │   ├── App.jsx              # Main application component
    │   ├── main.jsx             # React entry point
    │   ├── App.css              # Application styles
    │   └── index.css            # Global styles
    ├── package.json             # Frontend dependencies
    └── vite.config.js           # Vite build configuration
```

##  Tech Stack

### Backend
- **Express.js** - Web framework
- **Apollo Server** - GraphQL server
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 19** - JavaScript library for building UI
- **Vite** - Next generation frontend tooling
- **Apollo Client** - GraphQL client for React
- **React DOM** - React rendering engine

##  Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory and add your MongoDB URI:
```env
MONGO_URI=mongodb://localhost:27017/blog
```

4. Start the backend server:
```bash
node server.js
```

The GraphQL server will be available at `http://localhost:4000/graphql`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal)
##  GraphQL API

### Queries

#### Get all posts
```graphql
query {
  getPosts {
    id
    title
    content
    createdAt
  }
}
```

#### Get a single post
```graphql
query {
  getPost(id: "POST_ID") {
    id
    title
    content
    createdAt
  }
}
```

### Mutations

#### Create a new post
```graphql
mutation {
  createPost(title: "My First Post", content: "This is the content") {
    id
    title
    content
    createdAt
  }
}
```

#### Delete a post
```graphql
mutation {
  deletePost(id: "POST_ID")
}
```

##  Database Schema

### Post Model
```javascript
{
  _id: ObjectId,          // MongoDB auto-generated ID
  title: String,          // Post title (required)
  content: String,        // Post content (required)
  createdAt: Date         // Creation timestamp (auto-set)
}
```

##  Frontend Components

### PostForm.jsx
Allows users to create new blog posts with title and content. Submits data via GraphQL mutation.

### PostList.jsx
Fetches and displays all blog posts from the GraphQL API. Handles loading and error states.

### PostItem.jsx
Individual post component displaying post details and delete functionality.

##  How It Works

1. **User submits a post** through the PostForm component
2. **Frontend sends a GraphQL mutation** to the Apollo Server
3. **Backend resolver** processes the request and saves to MongoDB
4. **Database stores** the post with timestamp
5. **Response sent back** to frontend with post ID
6. **UI updates** to display the new post in the list

##  Steps to Use the Application

1. Start both backend and frontend servers
2. Open the application in your browser
3. Enter a post title and content in the form
4. Click "Create Post" to submit
5. View all posts in the list below
6. Click the delete button to remove a post

##  Available Commands

### Backend
- `node server.js` - Start the GraphQL server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

##  Environment Variables

Create a `.env` file in the backend directory:

```env
MONGO_URI
NODE_ENV
```

##  Useful Resources

- [GraphQL Documentation](https://graphql.org/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)


**MongoDB Connection Error**
- Ensure MongoDB is running locally or check your MongoDB Atlas connection string
- Verify `MONGO_URI` in `.env` file

**CORS Errors**
- Ensure backend has CORS middleware enabled
- Check that frontend is calling the correct GraphQL endpoint

**Port Already in Use**
- Backend default: 4000
- Frontend default: 5173
- Change ports in configuration if needed


**Happy Blogging! ✨**
