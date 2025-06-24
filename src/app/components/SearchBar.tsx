'use client'

import Image from 'next/image'
import { useState } from 'react';

interface IpSearchProps {
  onSearch: (ipAddressInput: string) => Promise<void>;
}

const SearchBar: React.FC<IpSearchProps> = ({onSearch}) => {
  const [ipAddressInput, setIpAddressInput] = useState("");

  const handleSubmitIPAddress = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(ipAddressInput)
  }

  return (
    <form 
      onSubmit={handleSubmitIPAddress}
      className="flex flex-row z-100 justify-center my-6 md:my-10 max-w-md md:max-w-xl mx-auto"
    >
      <input 
        type="text"
        value={ipAddressInput}
        onChange={e => setIpAddressInput(e.target.value)}
        placeholder="Search for any IP address or domain"
        className="bg-white text-very-dark-gray flex-1 h-12 md:h-15 p-3 md:p-4 text-base md:text-lg rounded-l-md outline-none placeholder:text-sm md:placeholder:text-base"
      />

      <button
        type="submit"
        className="bg-black w-12 md:w-10 h-12 md:h-15 flex justify-center items-center hover:cursor-pointer active:bg-very-dark-gray/90 rounded-r-md"
      >
        <Image 
          src="/assets/icon-arrow.svg"
          alt="Icon to search IP address"
          width={12}
          height={12}
          className="md:w-[15px] md:h-[15px]"
        />
      </button>
    </form>
  )
}

export default SearchBar;