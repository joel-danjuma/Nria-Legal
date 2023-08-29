const Services = () => {
  return (
    <section id="services">
      <div className="relative items-center w-full p-4 pt-10 md:px-12 lg:px-16 container mx-auto ">
        <div className="w-full flex justify-center">
          <div className="container mx-auto px-6 p-6">
            <div className={`mb-16 text-center`}>
              <h4
                className={`text-base text-indigo-600 font-semibold tracking-wide uppercase`}
              >
                Our Services
              </h4>
              <p
                className={`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`}
              >
                How we change the game
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-xl  mx-auto text-left lg:max-w-7xl">
            <h2 className="sr-only">Features.</h2>
            <div>
              <div className="grid grid-cols-2 gap-12 lg:grid-cols-3 lg:space-y-0">
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Database with GraphQL
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Define the data model in your database and query data with
                    GraphQL.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Real-time Sync
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Sync data across multiple clients.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Permissions
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Define complex security policies to keep your users’ data
                    safe.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      File Storage
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Upload and manage files.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Image Transformations
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Resize and optimise images on the fly.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Authentication
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    User accounts and social login.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Serverless Functions
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Custom backend code with logs and error handling.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Payments
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Stripe integration for all apps.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Transactional Emails
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    Design your email templates and engage your users.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
