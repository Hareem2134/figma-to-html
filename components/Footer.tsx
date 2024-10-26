import Image from "next/image";

export default function Footer(){
    return(
        <>
        <div className="footer">
            <Image src="/fb.png" alt="FaceBook" width="30" height="30"/>
            <Image src="/insta.png" alt="Instagram" width="30" height="30"/>
            <Image src="/twitter.png" alt="Twitter" width="30" height="30"/>
            <Image src="/Linkedin.png" alt="Linkedin" width="30" height="30"/>
        </div>

        <div className="footer-text">
            <p>Copyright ©2020 All rights reserved</p>
        </div>
        </>
    );
}