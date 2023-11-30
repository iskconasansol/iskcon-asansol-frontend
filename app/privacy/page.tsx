import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy',
};

const Privacy = () => {
  return (
    <main className="py-16">
      <div className="container space-y-4">
        <h1 className="md:text-2xl text-purple-800 font-semibold">
          Privacy Policy
        </h1>

        <p className="">
          This privacy notice discloses the privacy practices for
          www.iskconasansol.com. This privacy notice applies solely to
          information collected by this website. It will notify you of the
          following:
        </p>

        <div>
          <ul>
            <li>
              What personally identifiable information is collected from you
              through the website, how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ul>
        </div>

        <h3 className='font-semibold'>Information Collection, Use, and Sharing</h3>
        <p>
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email or other direct contact from you. We will not sell or rent
          this information to anyone.
        </p>
        <p>
          Your use of the Site is governed by the policies, terms, and
          conditions set forth below. Please read the following information
          carefully. By using this Site or donating through the site, you
          indicate your acceptance of, and agreement to be bound by, the terms
          set forth below. If you do not agree to these terms and conditions,
          please do not use this Site.{' '}
        </p>

        <p>
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfil
          your request, e.g. to ship an order.
        </p>

        <p>
          Unless you ask us not to, we may contact you via email in the future
          to tell you about specials, new products or services, or changes to
          this privacy policy.
        </p>

        <h3 className='font-semibold'>Your Access to and Control Over Information</h3>

        <p>
          You may opt out of any future contacts from us at any time. You can do
          the following at any time by contacting us via the email address or
          phone number given on our website:
        </p>

        <div>
          <ul>
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ul>
        </div>

        <h3 className='font-semibold'>Security</h3>

        <p>
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
        </p>

        <p>
          {` Wherever we collect sensitive information (such as credit card data),
          that information is encrypted and transmitted to us in a secure way.
          You can verify this by looking for a lock icon in the address bar and
          looking for "https" at the beginning of the address of the Web page.`}
        </p>

        <p>
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, billing
          or customer service) are granted access to personally identifiable
          information. The computers/servers in which we store personally
          identifiable information are kept in a secure environment.
        </p>

        <p>
          If you feel that we are not abiding by this privacy policy, you should
          contact us immediately via telephone at +91 94340 00000 or via email
          at{' '}
          <span className='underline'>
            <a href="mailto:iskconasanol@gmail.com">iskconasansol@gmail.com </a>
          </span>
        </p>
      </div>
    </main>
  );
};

export default Privacy;
