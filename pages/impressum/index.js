import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import Layout from "../../components/layout"
import Container from "../../components/container"

export default function Impressum(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>werkkasten | Impressum</title>
                </Head>
                <Container>
                    <div className="flex flex-col w-full items-center justify-center">
                        <div className="mb-12 px-4">
                            <svg data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" className="w-32 fill-gray-100"
                                 viewBox="0 0 499.17 500.6">
                                <path
                                    d="M466.46 395.85a42.37 42.37 0 0 0 27.14-52.51l-87.28-274h.07L392.14 24.6a35.36 35.36 0 0 0-44.36-22.93l-44.72 14.24v.07l-274 87.28A40.92 40.92 0 0 0 4.86 124a40.93 40.93 0 0 0-2.9 31.77l87.28 274h-.07l14.25 44.73a35.36 35.36 0 0 0 44.36 22.92l44.73-14.25v-.06ZM92.5 169.3l235.52-75 75 235.52-235.52 75Z"/>
                                <rect x="416.41" y="417.84" width="82.76" height="82.76" rx="13.85"/>
                            </svg>
                        </div>
                    </div>
                    <div className="w-full lg:11/12 lg:w-8/12 mx-auto bg-gray-100 bg-opacity-50 rounded-xl mb-12">
                        <div className="text-sm text-gray-400">
                            <div className="mb-12 bg-gray-200 p-12">
                                <div className="mb-2 text-gray-600">
                                    <span className="font-bold">CEO</span> Zulfi Ismailov-Demiri <br />
                                    <span className="font-bold">Werkstatt/Studio</span> Richardstr. 14, 26725 Emden<br />
                                    <span className="font-bold">Tel.</span> +49 4921 9061558 <br />
                                    <span className="font-bold">Umsatzsteuer-ID</span> Umsatzsteuer-Identifikationsnummer gem. ?? 27 a Umsatzsteuergesetz: DE252890083
                                </div>
                            </div>

                            <div className="mb-12 px-12 pb-12">

                                <div className="font-bold text-lg mb-8">Haftungsausschluss ??? Disclaimer </div>

                                <div className="columns-1 lg:columns-2 2xl:columns-3 gap-12 text-left">

                                    <div className="font-bold mb-4">Haftung f??r Inhalte</div>

                                    <div className="mb-4">Alle Inhalte unseres Internetauftritts wurden mit gr????ter Sorgfalt und nach bestem Gewissen erstellt. F??r die Richtigkeit, Vollst??ndigkeit und Aktualit??t der Inhalte k??nnen wir jedoch keine Gew??hr ??bernehmen. Als Diensteanbieter sind wir gem???? ?? 7 Abs.1 TMG f??r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach ???? 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, ??bermittelte oder gespeicherte fremde Informationen zu ??berwachen oder nach Umst??nden zu forschen, die auf eine rechtswidrige T??tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber??hrt.</div>

                                    <div className="mb-4">Eine diesbez??gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung m??glich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverz??glich entfernen.</div>

                                    <div className="font-bold mb-4">Haftungsbeschr??nkung f??r externe Links</div>

                                    <div className="mb-4">Unsere Webseite enth??lt Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher k??nnen wir f??r die ???externen Links??? auch keine Gew??hr auf Richtigkeit der Inhalte ??bernehmen. F??r die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.</div>

                                    <div className="mb-4">Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverst????e ??berpr??ft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine st??ndige inhaltliche ??berpr??fung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht m??glich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die au??erhalb unseres Verantwortungsbereichs liegen, w??rde eine Haftungsverpflichtung ausschlie??lich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch m??glich und zumutbar w??re, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</div>

                                    <div className="mb-4">Diese Haftungsausschlusserkl??rung gilt auch innerhalb des eigenen Internetauftrittes werkkasten.com gesetzten Links und Verweise von Fragestellern, Blogeintr??gern, G??sten des Diskussionsforums. F??r illegale, fehlerhafte oder unvollst??ndige Inhalte und insbesondere f??r Sch??den, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der ??ber Links auf die jeweilige Ver??ffentlichung lediglich verweist.</div>

                                    <div className="mb-4">Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverz??glich entfernt.</div>

                                    <div className="font-bold mb-4">Urheberrecht</div>

                                    <div className="mb-4">Die auf unserer Webseite ver??ffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht <Link href="http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf" target="_blank"><a className="text-werk text-opacity-40" >(http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf)</a></Link>. Die Vervielf??ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers au??erhalb der Grenzen des Urheberrechtes bed??rfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes <Link href="http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf" target="_blank"><a className="text-werk text-opacity-40" >(http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf)</a></Link>. Downloads und Kopien dieser Seite sind nur f??r den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverz??glich entfernen.</div>

                                    <div className="text-sm">Dieses <Link href="https://jurarat.de/muster-impressum"><a className="text-werk text-opacity-40" >Impressum</a></Link> wurde freundlicherweise von <a className="text-werk text-opacity-40" href="//jurarat.de">jurarat.de</a> zur Verf??gung gestellt.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}