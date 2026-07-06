import { LegalPage, LegalSection } from '@/components/site/legal-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Arivu Systems products and services.',
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="July 6, 2026">
      <LegalSection title="Agreement">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
          Arivu Systems website, platform, and related services (collectively, the
          &ldquo;Services&rdquo;). By accessing or using the Services, you agree to these
          Terms. If you are using the Services on behalf of an organization, you represent that
          you have authority to bind that organization.
        </p>
      </LegalSection>

      <LegalSection title="Use of the Services">
        <p>You agree to use the Services only for lawful business purposes and not to:</p>
        <ul>
          <li>Violate applicable laws, regulations, or third-party rights</li>
          <li>Attempt to gain unauthorized access to systems, accounts, or data</li>
          <li>Interfere with or disrupt the integrity or performance of the Services</li>
          <li>Upload malicious code or use the Services to send spam or abusive content</li>
          <li>Reverse engineer or copy the Services except as permitted by law</li>
        </ul>
      </LegalSection>

      <LegalSection title="Accounts">
        <p>
          You are responsible for maintaining the confidentiality of your account credentials
          and for all activity under your account. Notify us promptly of any unauthorized use or
          security incident.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions and fees">
        <p>
          Paid plans, if applicable, are billed according to the order form or pricing page you
          accept. Fees are non-refundable except where required by law or expressly stated in
          your agreement. We may change pricing for future billing periods with reasonable notice.
        </p>
      </LegalSection>

      <LegalSection title="Customer data">
        <p>
          You retain ownership of data you submit to the Services (&ldquo;Customer Data&rdquo;).
          You grant Arivu a limited license to host, process, and display Customer Data solely
          to provide and improve the Services. You are responsible for obtaining any rights and
          consents needed to submit Customer Data.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          Arivu and its licensors own the Services, including software, branding, documentation,
          and other materials. Except for the limited rights expressly granted to you, no rights
          are transferred under these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          The Services may integrate with or link to third-party products. Those services are
          governed by their own terms and privacy policies. Arivu is not responsible for
          third-party services.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE
          MAXIMUM EXTENT PERMITTED BY LAW, ARIVU DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARIVU WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
          REVENUE, DATA, OR GOODWILL. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR
          RELATING TO THE SERVICES WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO ARIVU FOR THE
          SERVICES IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You may stop using the Services at any time. We may suspend or terminate access if you
          materially breach these Terms or if required for legal, security, or operational
          reasons. Provisions that by their nature should survive termination will survive.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may modify these Terms from time to time. If we make material changes, we will
          provide notice by posting the updated Terms on this page and updating the &ldquo;Last
          updated&rdquo; date. Continued use of the Services after changes become effective
          constitutes acceptance.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws applicable in the jurisdiction where Arivu Systems
          is established, without regard to conflict-of-law principles. Disputes will be resolved
          in the courts of that jurisdiction, unless otherwise required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms may be sent to{' '}
          <a href="mailto:legal@arivusystems.com">legal@arivusystems.com</a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
