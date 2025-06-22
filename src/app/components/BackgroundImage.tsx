import Image from "next/image"

const BackgroundImage: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image 
        src="/assets/pattern-bg-desktop.png" 
        alt="background image"
        width={1920}
        height={1080}
        className="w-full h-auto object-contain"
      />
    </div>
  )
}

export default BackgroundImage;