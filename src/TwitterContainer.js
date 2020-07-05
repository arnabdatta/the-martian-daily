import React, { useEffect } from "react";

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-width="300"
          data-tweet-limit="3"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/MarsCuriosity?ref_src=twsrc%5Etfw"
        >
          Tweets by MarsCuriosity
        </a>
      </div>
    </section>
  );
};

export default TwitterContainer;