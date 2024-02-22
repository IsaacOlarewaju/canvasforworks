import { Link } from "react-router-dom";

export const PrivacyBody = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-body">
        <div className="title-container">
          <h1 className="title">Privacy</h1>
        </div>
        <div className="privacy-body-container">
          <div className="privacy-body-section">
            <h2>What is this Privacy Policy for?</h2>
            <p>
              This Privacy Policy is for this website{" "}
              <Link to={"https://canvasforworks.com/"}>
                [www.canvasforworks.com]
              </Link>{" "}
              and served by CANVAS for Works© Ltd., and governs the privacy of
              its users who choose to use it.
              <br />
              <br />
              The policy sets out the different areas where user privacy is
              concerned and outlines the obligations &amp; requirements of the
              users, and the website owner. Furthermore, the way this website
              processes, stores and protects user data and information will also
              be detailed within this policy.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>Your Privacy</h2>
            <p>
              Absolutely NO personal information is shared, or sold to anyone
              else. Please also note that this website uses Secure{" "}
              <Link to={"https://en.wikipedia.org/wiki/HTTPS"} target="_blank">
                HTTPS{" "}
              </Link>
              Protocol, thus protecting the data you choose to send using one of
              our forms.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>Social Media Platforms</h2>
            <p>
              Communication, engagement and actions taken through external
              social media platforms that this website participates on, are
              custom to the terms and conditions as well as the privacy policies
              held with each social media platform respectively.
              <br />
              <br />
              Users are advised to use social media platforms wisely and
              communicate/engage upon them with due care and caution in regard
              to their own privacy and personal details.
              <br />
              <br />
              This website will never ask for personal or sensitive information
              through social media platforms, and encourage users wishing to
              discuss sensitive details to contact them through primary
              communication channels such as by telephone or email.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>Shortened Links in Social Media</h2>
            <p>
              This website through it’s social media platform accounts may share
              web links to relevant web pages. By default some social media
              platforms, such as Twitter, will shorten lengthy URL’s. Users are
              advised to take caution and good judgement before clicking any
              shortened URL’s published on social media platforms by this
              website.
              <br />
              <br />
              Despite the best efforts to ensure only genuine URL’s are
              published, many social media platforms are prone to spam and
              hacking, and therefore this website cannot be held liable for any
              damages or implications caused by visiting any shortened links.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>Embedded Content from Other Websites</h2>
            <p>
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
              <br />
              <br />
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your interaction with
              that embedded content, including tracking your interaction with
              the embedded content if you have an account and are logged in to
              that website.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>Adverts &amp; Sponsored Links</h2>
            <p>
              This website DOES NOT contain: Sponsored Links, Adverts, or runs
              any kind of Revenue Generated Advertising.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>Contact &amp; Communication</h2>
            <p>
              Users contacting this website do so at their own discretion, and
              provide any such personal details requested at their own risk.
              Your personal information is kept private and stored securely
              until a time it is no longer required or has no use, as detailed
              in the{" "}
              <Link
                to={"https://www.legislation.gov.uk/ukpga/1998/29/contents"}
                target="_blank"
              >
                Data Protection Act 1998
              </Link>
              .
              <br />
              <br />
              Every effort has been made to ensure a safe and secure form{" "}
              <Link to={"https://en.wikipedia.org/wiki/HTTPS"} target="_blank">
                (using HTTPS)
              </Link>{" "}
              to email submission process, but advise users using such form to
              email processes that they do so at their own risk.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>Email Newsletter</h2>
            <p>
              This website operates an email newsletter program, used to inform
              subscribers about news and services supplied by this website.
              Users can subscribe through an online automated process should
              they wish to do so, but do so at their own discretion. Some
              subscriptions may be manually processed through prior written
              agreement with the user.
              <br />
              <br />
              Subscriptions are taken in compliance with UK Spam Laws detailed
              in the{" "}
              <Link
                to={
                  "https://www.legislation.gov.uk/uksi/2003/2426/contents/made"
                }
                target="_blank"
              >
                Privacy and Electronic Communications Regulations 2003
              </Link>
              . All personal details relating to subscriptions are held securely
              and in accordance with the{" "}
              <Link
                to={"https://en.wikipedia.org/wiki/Data_Protection_Act_1998"}
                target="_blank"
              >
                Data Protection Act 1998
              </Link>
              . In compliance with UK Spam Laws and the{" "}
              <Link
                to={
                  "https://www.legislation.gov.uk/uksi/2003/2426/contents/made"
                }
                target="_blank"
              >
                Privacy and Electronic Communications Regulations 2003
              </Link>
              , subscribers are given the opportunity to un-subscribe at any
              time through an automated system. This process is detailed at the
              footer of each email campaign. If an automated un-subscription
              system is unavailable clear instructions on how to un-subscribe
              will by detailed instead.
            </p>
          </div>
          <div className="privacy-body-section">
            <h2>External Links</h2>
            <p>
              Although this website only looks to include quality, safe and
              relevant external links, users are advised adopt a policy of
              caution before clicking any external web links mentioned
              throughout this website.
              <br />
              <br />
              The owner of this website cannot guarantee or verify the contents
              of any externally linked website despite their best efforts. Users
              should therefore note they click on external links at their own
              risk, and this website cannot be held liable for any damages or
              implications caused by visiting any external links mentioned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
