import style from "./style.module.css"

interface Props {

}

export const Card = ({ }: Props) => {
    return (
        <div className={style.container}>
            <div className={style.image_section}>
                <img className={style.image} src="https://s3-alpha-sig.figma.com/img/e4df/e36c/7c16af662f0edb0478f43b78bf669922?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nLCfjBDXK1EzunlVoV7aySDjGxVQFmamO8-V4ICLFUu6hHSaGlBth-X6TBGTMLxX9Sx2TmINhylfE~rLtJzM3hVL8c27hlHjthI3UN2noOgAGmiBgCiC0eTXQmf6VXfMZTQZjEztQKEXuATWjDPSm1mVzL~Ghc2CqFVUxqZ7mYxIpMRn8tyY435IRFur-tdxKXmI0j5pl-InhYYlR1yGdncP03pAaSvLUP8l2Ympem5L6rDHVDdMpoipv6-Ja2MHv2VgbPNXe86Bp4vwrFPGZB-iT6-zbe~IZH6MiikabmTWQkX-JXcSCezA2G9IhE50XxoofGTCUcRJ6XBN27RzyQ__" />
            </div>
            <div className={style.text_section}>
                <h1 className={style.title}>Questões Alternativas</h1>
                <p className={style.text}>Realize questões de vestibulares anteriores. Estão separadas em:</p>
                <div className={style.second_section}>
                    <div className={style.li_section}>
                        <li className={style.li}>ano</li>
                        <li className={style.li}>dificuldade</li>
                        <li className={style.li}>disciplina</li>
                    </div>
                    <div className={style.initiate_section}>
                        <button className={style.initiate_button}><p className={style.text}>Iniciar</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}