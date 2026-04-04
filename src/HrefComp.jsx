import { Helmet } from "react-helmet-async";

const Hreflang = ({ links }) => {
  return (
    <Helmet>
      {links.map(({ lang, url }) => (
        <link
          key={lang}
          rel="alternate"
          hreflang={lang}
          href={url}
        />
      ))}
    </Helmet>
  );
};

export default Hreflang;
