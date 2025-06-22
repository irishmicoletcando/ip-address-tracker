import BackgroundImage from "./components/BackgroundImage";
import IPDetails from "./components/IPDetails";
import SearchBar from "./components/SearchBar";

const Page: React.FC = () => {
  return (
  <main className="relative p-0 m-0">
    <BackgroundImage />
    <p className="mt-10 mx-auto text-center text-4xl font-semibold text-white z-100">IP Address Tracker</p>
    <SearchBar/>
    <IPDetails />
  </main>
  )
}

export default Page;