import { socialMedia } from "../constants"

const SocialMediaIcon = ({className}) => {
  const style = className || "mt-10"
  return (
    <div className={`flex justify-center md:justify-start
    gap-8 ${style}`}>

        {socialMedia.map((link) => (
            <a
            className="hover:opacity-50 transition duration-500 flex justify-center items-center"
            key={link.alt} 
            href={link.href}
            target="_blank"
            rel="noreferrer"
            >
                <img src={link.src} alt={link.alt} />
            </a>
        ))}     
    </div>
  )
}

export default SocialMediaIcon