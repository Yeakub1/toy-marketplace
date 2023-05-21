import React from 'react';

const Blog = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="">
          <h1 className="text-3xl">
            <span className="font-bold text-primary">
              Access token and refresh token:{" "}
            </span>
            Access token and refresh token shouldn't be stored in the
            local/session storage, because they are not a place for any
            sensitive data. Hence I would store the access token in a httpOnly
            cookie even though there is CSRF.
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl">
            <span className="font-bold text-primary">SQL and NoSQL: </span>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores.
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl">
            <span className="font-bold text-primary">NestJS: </span>
            NestJS is a Node.js framework for building server-side applications.
            It is based on TypeScript and JavaScript.
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl">
            <span className="font-bold text-primary">Express JS: </span>
            Express is a Node.js web application framework that provides a wide
            range of functionality for constructing web and mobile applications.
            It is a layer built on top of Node that aids in the management of
            servers and routes.
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl">
            <span className="font-bold text-primary">
              MongoDB's aggregate:{" "}
            </span>
            MongoDB's aggregate function will cluster out the records in the
            form of a collection which can be then employed for providing
            operations like total number(sum), mean, minimum and maximum, etc.
            from the aggregated group of data extracted.
          </h1>
        </div>
      </div>
    );
};

export default Blog;