import Image from 'next/image'
import img from '../../public/Assets/logo.PNG'
export default function Footer() {
    return (
        <div>
  <footer className="bg-black text-center text-white fixed-bottom">
  <Image
      src={img}
      width={80}
      height={80}
    />
  </footer>    
  
</div>

    )
}
