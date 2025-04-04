import styles from "./style.module.css"
import InitiateButton from "../../components/InitiateButtons/index";
import { Card } from "../../components/Card";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.initiate_buttons}>
        <InitiateButton title="Questões Alternativas" imageURL="https://s3-alpha-sig.figma.com/img/cbb4/90b3/33179bcc76986a360733300f05a69555?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sudFwtHK7~EjlVtsCKLpxN8KY3Qqtv6Co7~L2uZxu-uHgXO0oWIemX2-UdMd-QiHO-rjAD7pGqsfqeCjyKngA9MLC~eXeL0T1iiaSlGtSF2vi3r6G-pAKUk1Ge65xh-MNhpZ~3BdwYLcgdAavVZ0ao6H77eEST-wowSGTc9ygQPAkAZZkUewAb02KiQHqeL8Dr2SznLYYoLIkwTU5T2phCNbM12wJEvWWIK~7u0j1Pbvo8nYmO879gu-l9sTpXyZd639UjPjuFtNg~TB1-~-mWCS4NVlIctq2WymJxpQXUjmmPwhlUffUDYLnPiW0Go~boDF3kVEMdRtXBxg9zwePA__"/>
        <InitiateButton  title="Temas de Redação" imageURL="https://s3-alpha-sig.figma.com/img/caa9/3381/829c084585fe6a195a3cdb636c9af740?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jeEcPoSDqFeJKRGYfenDDX6pW4NNc9-NYEgU1D2dYSE7f6Iszsx~6T6m2oFt58KQXQaTxiHgndWvALG7C-xHLjylGJjG3UBi1DROF56CaFkJJrZYCfThgYLGqmAmavleCnN7aoQTYE06x-zn~3RgvAXmAsqJ64nCfr5rsXHoa9RgAAIkBp~cSW5k33P4aBbsLUzN7jjj2~97JnMcndIm8o~wTOP7MJbtGKg1sBVGtfYBo4zIc06xcKfBSlvlZKgeu38C60E~57QoPf3BBWzas6IpEv02c8p7sRX6BkueRnmIP-27qLRBKF5o07z45aFE1gC7JCO8hUQY0JD0rdar3w__"/>
        <InitiateButton  title="Vestibular Completo" imageURL="https://s3-alpha-sig.figma.com/img/63c2/479f/4cda98ff57bea30fda638b6f08e39e7c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WRJ5k4yaDT9mJvgtjPZ-1Kvlce1KVkvoEdCuDeTSLf1j9ydJlaUEWkIsDV1rCU1IG2GmIO1aERb13~hFMXIrLHBi~XCbu9OpZxip4JOexQirtvLNNtUdioEicPSE0Lg5IHWSLX-Bk3TAxueIHAuGe31yp3BBG1rjmv37VZKi1ZKDNKYDFiDcTtl0Cx2qrlqALmU2bvXh8QPn1~jW9InvL8QpYVcmJFC92ylMI-l28TKHOnwrwXm5X~2ikmQ4Nal7QwLodehEEZXWc4EbFsvKdneP3SiM-N-ey0sczP-MIRPBMvfopulupKTWBa0oBd1yDtrPA7xCW1pkunt8me9TXQ__"/>
      </div>
      <div className={styles.card}>
        <Card />
      </div>
    </div>
   );
};
