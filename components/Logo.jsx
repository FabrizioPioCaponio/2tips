import Image from "next/image";

const Logo = () => {
    const logoStyle = `
  .logo-container {
  position: fixed;
  z-index: 9;
  opacity: 0.3;
  width: auto;
  height: auto;
  transition: opacity 0.7s ease;
  cursor: pointer;
  bottom       : -100px;
  left: -120px;
  
}

    .logo-image {
      width: 300px;
      
    }

    .logo-container:hover {
        opacity: 1;
      }
  `;

    return (
        <>
            <style>{logoStyle}</style>
            <a href='https://fabrizio-caponio-portfolio.netlify.app/' target="_blank" rel="noreferrer" className="logo-container">
                <Image src="/assets/images/loghinoTrasparente.png" width={300} height={300} alt='logo' className="logo-image" />
            </a>
        </>
    );
};

export default Logo;
