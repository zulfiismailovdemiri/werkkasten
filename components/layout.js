import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from "./header";
import Script from "next/script";
export default function Layout({ children }) {
    return (
        <>

            <Script src="https://www.googletagmanager.com/gtag/js?id=G-1C0BWC07BB" strategy="beforeInteractive" />
            <Script id="google-analytics" strategy="beforeInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                
                gtag('config', 'G-1C0BWC07BB');
                `}
            </Script>

            <Script strategy="beforeInteractive">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PHWNDTP');
                    `
                }
            </Script>


            <Meta />
            <Header/>
            <div className="w-full">
                <main>{children}</main>
            </div>
            <Footer />

            <Script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" strategy="beforeInteractive" data-cfasync="false" />

            <Script strategy="afterInteractive">
                {`
                window.cookieconsent.initialise({
                  "palette": {
                    "popup": {
                      "background": "#8300ff"
                    },
                    "button": {
                      "background": "#ffffff"
                    }
                  },
                  "position": "bottom-right",
                  "content": {
                    "message": "Zur Verbesserung dieser Website und ihres Nutzungserlebnisses verwenden wir Cookies. Durch die weitere Benutzung dieser Website wird dem Gebrauch von Cookies zugestimmt.",
                    "dismiss": "Ich verstehe",
                    "deny": "Ablehnen",
                    "link": "Mehr erfahren",
                    "href": "/cookie"
                  }
                });
                `}
            </Script>

            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" strategy="afterInteractive" />
            <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" strategy="afterInteractive" />

        </>
    )
}