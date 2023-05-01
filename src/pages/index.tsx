import Navigation from "../components/Navigation"

export default function homePage() {
  return (
    <>
      <Navigation li1_bg="bg-gray-100" li1_tx="text-gray-800" li2_bg="bg-gray-800" li2_tx="text-gray-100" darkli1_bg="dark:bg-gray-900" darkli1_tx="dark:text-gray-100" darkli2_bg="dark:bg-gray-100" darkli2_tx="dark:text-gray-800" />
      
      <div className="mx-auto h-screen w-full bg-gray-100 p-4 dark:bg-gray-900 md:w-[98%] md:rounded-t-lg">
        <h1>Home Page</h1>
        <p>This is the home page</p>
      </div>
    </>
  );
}
