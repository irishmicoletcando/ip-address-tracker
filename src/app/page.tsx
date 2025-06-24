'use client'

import BackgroundImage from "./components/BackgroundImage";
import IPDetails from "./components/IPDetails";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import dynamic from "next/dynamic";

interface IpDetailsProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  lat: number;
  lng: number,
}

const DynamicMap = dynamic(() => import("../app/components/Map"), {
  loading: () => (
    <div className="h-full w-full flex justify-center items-center text-3xl text-black/40">
      <p>Loading...</p>
    </div>
  ),
  ssr: false,
});

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
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng
      })
      console.log(data)
    } else {
      setIpDetails(null)
    }
  }

  return (
  <main className="relative min-h-screen flex flex-col">
    {/* Background Section */}
    <div className="relative h-80">
      <BackgroundImage />
      <div className="relative z-10 px-6 pt-10">
        <p className="mx-auto text-center text-4xl font-semibold text-white mb-8">
          IP Address Tracker
        </p>
        <SearchBar onSearch={fetchData} />
      </div>
    </div>
    
    {/* IP Details Card */}
    {ipDetails && (
      <div className="absolute top-60 left-0 right-0 z-50 px-6">
        <IPDetails 
          ip={ipDetails.ip} 
          location={ipDetails.location} 
          timezone={ipDetails.timezone} 
          isp={ipDetails.isp} 
        />
      </div>
    )}
    
    {/* Map Section */}
    <div className="flex-1 min-h-[500px] relative z-10">
      <DynamicMap 
        lat={ipDetails?.lat ?? 14.609053}
        lng={ipDetails?.lng ?? 121.022256}
      />
    </div>
  </main>
  )
}

export default Page;