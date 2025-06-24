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
      className="flex flex-row z-100 justify-center my-10"
    >
      <input 
        type="text"
        value={ipAddressInput}
        onChange={e => setIpAddressInput(e.target.value)}
        placeholder="Search for any IP address or domain"
        className="bg-white text-very-dark-gray w-xl h-15 p-4 text-lg rounded-l-md outline-none"
      />

      <button
        type="submit"
        className="bg-black w-10 h-15 flex justify-center items-center hover:cursor-pointer"
      >
        <Image 
          src="/assets/icon-arrow.svg"
          alt="Icon to search IP address"
          width={15}
          height={15}
          className="bg-black"
        />
      </button>
    </form>
  )
}

export default SearchBar;