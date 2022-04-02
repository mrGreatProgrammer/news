import React from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import "./ShareBtns.css";

const ShareBtns = () => {
  return (
    <div className="container--glassmorfism">
      <div className="share__btns--block">
        <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            labels: "cta", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "whatsapp",
              "linkedin",
              "messenger",
              "facebook",
              "twitter",
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 50, // the corner radius on each button (INTEGER)
            size: 45, // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: "https://hi.com", // (defaults to current url)
            image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
            description: "custom text", // (defaults to og:description or twitter:description)
            title: "custom title", // (defaults to og:title or twitter:title)
            message: "custom email text", // (only for email sharing)
            subject: "custom email subject", // (only for email sharing)
            username: "custom twitter handle",
          }}
        />
      </div>
    </div>
  );
};

export default ShareBtns;
