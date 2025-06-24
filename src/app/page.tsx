'use client'

import BackgroundImage from "./components/BackgroundImage";
import IPDetails from "./components/IPDetails";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

interface IpDetailsProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

const Page: React.FC = () => {
  const [ipDetails, setIpDetails] = useState<IpDetailsProps | null>(null);

  async function fetchData(ipAddressInput: string) {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_RdFlA7mfv8e0m04LCkrOrvTzg4jbM&ipAddress=${ipAddressInput}`)
    const data = await res.json();
    
    if ( data && data.ip ) {
      setIpDetails ({ 
        ip: data.ip,
        location: `${data.location.city}, ${data.location.country}, ${data.location.region}`,
        timezone: data.location.timezone,
        isp: data.isp
      })
      console.log(data)
    } else {
      setIpDetails(null)
    }
  }

  return (
  <main className="relative p-0 m-0">
    <BackgroundImage />
    <p className="mt-10 mx-auto text-center text-4xl font-semibold text-white z-100">IP Address Tracker</p>
    <SearchBar onSearch={fetchData} />
    {ipDetails && (
      <IPDetails 
        ip={ipDetails.ip} 
        location={ipDetails.location} 
        timezone={ipDetails.timezone} 
        isp={ipDetails.isp} 
      />
    )}
  </main>
  )
}

export default Page;