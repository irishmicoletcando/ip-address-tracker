'use client'

import { useState } from 'react';
import Image from 'next/image'

interface IPInformationProps {
  ipaddress: string;
  location: string;
  timezone: string;
  isp: string;
}

const SearchBar: React.FC = () => {
  const [ipAddressInput, setIpAddressInput] = useState("");

  const handleSubmitIPAddress = (e) => {
    e.preventDefault();
    console.log("IP Address: ", ipAddressInput)
    fetchData()
  }

  async function fetchData() {
    const data = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_RdFlA7mfv8e0m04LCkrOrvTzg4jbM&ipAddress=${ipAddressInput}`)
    const ipAddressData = await data.json();
    console.log(ipAddressData)
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
        className="bg-white text-very-dark-gray w-xl h-10 p-4 rounded-l-md outline-none"
      />

      <button
        type="submit"
        className="bg-black w-10 h-10 flex justify-center items-center hover:cursor-pointer"
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