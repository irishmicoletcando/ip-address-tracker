import Image from "next/image"

export default function Page() {
  return (
  <main className="p-0 m-0">
    <div>
      <Image 
        src="/assets/pattern-bg-desktop.png" 
        alt="background image"
        width={1920}
        height={1080}
        className="w-full h-auto object-contain"
      />
    </div>
  </main>
  )
}