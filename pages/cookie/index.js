import Head from 'next/head'
import Image from 'next/image'
import Layout from "../../components/layout"
import Container from "../../components/container"


export default function Cookie(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>werkkasten | Unsere Cookie Richtlinie</title>
                </Head>
                <Container>

                    <div className="mb-12 px-4 flex flex-col w-full items-center justify-center">
                        <svg data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" className="w-32 fill-gray-100"
                             viewBox="0 0 499.17 500.6">
                            <path
                                d="M466.46 395.85a42.37 42.37 0 0 0 27.14-52.51l-87.28-274h.07L392.14 24.6a35.36 35.36 0 0 0-44.36-22.93l-44.72 14.24v.07l-274 87.28A40.92 40.92 0 0 0 4.86 124a40.93 40.93 0 0 0-2.9 31.77l87.28 274h-.07l14.25 44.73a35.36 35.36 0 0 0 44.36 22.92l44.73-14.25v-.06ZM92.5 169.3l235.52-75 75 235.52-235.52 75Z"/>
                            <rect x="416.41" y="417.84" width="82.76" height="82.76" rx="13.85"/>
                        </svg>
                    </div>
                    <div className="w-full lg:11/12 lg:w-8/12 mx-auto bg-gray-100 bg-opacity-50 rounded-xl mb-12">
                        <div className="text-sm text-gray-400">
                            <div className="mb-12 bg-gray-200 p-12">
                                <div className="mb-2 text-gray-600 text-4xl">
                                    Richtlinie hinsichtlich der Verwendung von Cookies und ähnlichen Technologien
                                </div>
                            </div>

                            <div className="mb-12 px-12 pb-12">

                                <div className="columns-1 lg:columns-2 2xl:columns-3 gap-12 text-left">

                                    <div className="mb-4">
                                        Wie die meisten Websites speichert auch diese Website beim Besuch möglicherweise eine kleine
                                        Menge Daten auf das Gerät des Nutzers unter
                                        Verwendung von „Cookies“, „Web Beacons“ und ähnlichen Technologien. Der Gebrauch des
                                        Begriffs „Cookies“ ist weit gefasst und umfasst auch ähnliche
                                        Technologien wie „localStorage“. Cookies helfen dabei, dass diese Website funktioniert,
                                        und liefern uns Informationen darüber, wie Nutzer mit unserer Website interagieren. Wir
                                        verwenden diese Informationen, um unsere Website zu verbessern.
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold">Cookies.</span> Es gibt verschiedene Arten von Cookies,
                                        die unterschiedliche Funktionen erfüllen, um grundsätzlich das Nutzungserlebnis auf
                                        der Website zu verbessern. Wir verwenden möglicherweise Cookies, um zu erfahren, ob
                                        der Nutzer schon zuvor die Website besucht hat, oder um Präferenzen des Nutzers beim
                                        Gebrauch der Website zu speichern.
                                    </div>
                                    <div className="mb-4">
                                        Die Arten von Cookies auf dieser Website können in folgende drei Kategorien eingeordnet werden:
                                    </div>
                                    <div className="mb-4">
                                        <ul className="list-disc">
                                            <li className="mb-3">Unbedingt notwendige Cookies. Diese sind unerlässlich, um dem Nutzer die Verwendung bestimmter
                                                Funktionen der Website zu ermöglichen, wie z. B. den Login oder das Absenden von Formularen auf
                                                der Website. Ohne diese Cookies können vom Nutzer gewünschte Dienste, nicht zur Verfügung gestellt werden.
                                                Diese Cookies sammeln über den Nutzer keine
                                                Informationen, die für Werbezwecke genutzt werden könnten.</li>

                                            <li className="mb-3">Cookies für die Funktionsfähigkeit — Diese werden verwendet, damit die Website Auswahlentscheidungen
                                                wie z. B. Benutzername, Sprache oder Region des Nutzers speichern kann und erweiterte Funktionen
                                                zur Verfügung stellen kann, um das Nutzungserlebnis zu verbessern.</li>

                                            <li className="mb-3">Analytische Cookies — Diese werden verwendet, um Informationen darüber zu sammeln,
                                                wie Besucher diese Website verwenden, beispielsweise die Anzahl von Besuchen auf dieser
                                                Website oder die durchschnittliche Verweildauer. Diese Informationen werden ausschließlich
                                                dazu verwendet, die Funktionalität dieser Website zu verbessern.</li>
                                        </ul>

                                    </div>
                                    <div className="mb-4">
                                        Die meisten unserer Cookies werden von unserer Website selbst gesetzt („First-Party Cookies“).
                                        Manche Cookies sind Third-Party Cookies, die von Drittanbietern (anderen Websites) gesetzt werden.
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold">Web Beacons.</span> Die Seiten unserer Website können kleine elektronische Dateien enthalten, bekannt
                                        als „Web Beacons“, die uns eine Aufzeichnung von Aktivitäten ermöglichen, wie z. B. wann der
                                        Nutzer eine bestimmte Seite besucht. Web Beacons werden dazu verwendet, die Verwendung dieser
                                        Website nachzuvollziehen und ihre Leistungsfähigkeit zu überwachen.
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold">Verwendung von IP-Adressen.</span> Eine IP-Adresse ist eine Zahlenfolge, die den Computer des Nutzers
                                        im Internet identifiziert. Wir verwenden die IP-Adresse und den Browsertyp des Nutzers, um
                                        Nutzungsverläufe analysieren zu können und Probleme dieser Website zu diagnostizieren und um
                                        die Dienste, die wir zur Verfügung stellen, zu verbessern. Ohne zusätzliche Informationen
                                        identifiziert die IP-Adresse jedoch nicht den Nutzer.
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold">Entscheidungen des Nutzers.</span> Beim Aufrufen dieser Website wurden unsere Cookies an den Webbrowser
                                        des Nutzers gesendet und auf seinem Computer gespeichert. Durch die Verwendung unserer Website
                                        stimmt der Nutzer der Verwendung von Cookies und ähnlichen Technologien zu. Wenn der Nutzer
                                        sie entfernen möchte, ist dies über die Einstellungen in seinem Browser möglich; ohne Cookies
                                        kann der Nutzer allerdings möglicherweise nicht die volle Funktionalität unserer Website in
                                        Anspruch nehmen. Die Hilfefunktion des Browsers sollte eine ausführliche Anleitung dazu enthalten, wie Cookies gelöscht werden.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}