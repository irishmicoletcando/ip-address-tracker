import Image from 'next/image'

export default function SearchBar() {
  return (
    <div className="flex flex-row z-100 justify-center my-10">
      <div>
        <input 
          type="text"
          placeholder="Search for any IP address or domain"
          className="bg-white text-very-dark-gray w-xl h-10 p-4 rounded-l-md outline-none"
        />
      </div>
      <button className="bg-black w-10 h-10 flex justify-center items-center hover:cursor-pointer">
        <Image 
          src="/assets/icon-arrow.svg"
          alt="Icon to search IP address"
          width={15}
          height={15}
          className="bg-black"
        />
      </button>
    </div>
  )
}