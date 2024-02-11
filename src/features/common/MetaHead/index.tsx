import Head from "next/head";
import React from "react";
import { ISEO } from "../../../../utils/interfaces";

type MetaHeadProps = ISEO;

const MetaHead = (props: MetaHeadProps) => {
  const logoUrl = /*BASE_DEPLOYMENT_URL + */ "/assets/logo/telkom-og-logo.png";
  const title = props?.title || "DMV"; /* || PROJECT_NAME*/
  const canonicalUrl = props?.canonicalUrl || "";
  const description =
    props?.description ||
    "Biggest provider of communication services in South Africa for mobile, home and business. ADSL, Fiber, Wireless broadband and mobile internet services.";
  const keywords = props?.keywords; /* || PROJECT_NAME*/
  const imageUrl = props?.imageUrl || logoUrl;
  //   const shouldAddNoIndexTag =
  //     PROJECT_ENV_NAME === 'prod' ? Boolean(props.noIndex ?? false) : true;
  return (
    <Head>
      <title>{title}</title>

      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* {shouldAddNoIndexTag && <meta name="robots" content="noindex,nofollow" />} */}

      {/* {META_FB_APP_ID ? (
        <meta property="fb:app_id" content={META_FB_APP_ID} />
      ) : (
        <></>
      )} */}

      {/* <meta property="og:site_name" content={META_OG_SITE_NAME} /> */}
      <meta property="og:type" content={"website"} />
      <meta property="og:title" content={props?.og?.title || title} />
      <meta
        property="og:description"
        content={props?.og?.description || description}
      />
      <meta property="og:url" content={props?.og?.url || canonicalUrl} />
      <meta property="og:image" content={props?.og?.image || imageUrl} />
      <meta
        property="og:image:alt"
        content={props?.og?.image_alt || description}
      />
      {props?.og?.image_width ? (
        <meta property="og:image:width" content={props?.og?.image_width} />
      ) : (
        <></>
      )}
      {props?.og?.image_height ? (
        <meta property="og:image:height" content={props?.og?.image_height} />
      ) : (
        <></>
      )}
      <meta name="twitter:card" content={"summary_large_image"} />
      {/* 
      {META_TWITTER_SITE_NAME ? (
        <meta name="twitter:site" content={META_TWITTER_SITE_NAME} />
      ) : (
        <></>
      )}
      {META_TWITTER_SITE_ID ? (
        <meta name="twitter:site:id" content={META_TWITTER_SITE_ID} />
      ) : (
        <></>
      )}
      {META_TWITTER_CREATOR_NAME ? (
        <meta name="twitter:creator" content={META_TWITTER_CREATOR_NAME} />
      ) : (
        <></>
      )} */}

      <meta name="twitter:title" content={props.twitter?.title || title} />
      <meta
        name="twitter:description"
        content={props?.twitter?.description || description}
      />
      <meta name="twitter:image" content={props?.twitter?.image || imageUrl} />
      <meta
        name="twitter:image:alt"
        content={props?.twitter?.image_alt || description}
      />
    </Head>
  );
};

export default MetaHead;
