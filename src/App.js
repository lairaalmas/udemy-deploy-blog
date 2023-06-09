import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

// for components pt 1
const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            // for contents pt 2
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            // for functions without args
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            // for functions with args
            loader: ({ params }) =>
              import("./pages/Post").then((module) =>
                module.loader({ params })
              ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import BlogPage, { loader as postsLoader } from './pages/Blog';
// import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post';
// import RootLayout from './pages/Root';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: 'posts',
//         children: [
//           { index: true, element: <BlogPage />, loader: postsLoader },
//           { path: ':id', element: <PostPage />, loader: postLoader },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
