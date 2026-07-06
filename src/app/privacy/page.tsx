import { LegalPage, LegalSection } from '@/components/site/legal-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Arivu Systems collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="July 6, 2026">
      <LegalSection title="Overview">
        <p>
          Arivu Systems (&ldquo;Arivu,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) provides a process-first platform and connected business
          applications. This Privacy Policy explains how we collect, use, disclose, and
          safeguard information when you visit our website or use our services.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>We may collect information in the following ways:</p>
        <ul>
          <li>
            <strong>Account and contact information</strong>{' '}
            such as your name, email address, company name, and billing details when you
            register, request a demo, or subscribe to updates.
          </li>
          <li>
            <strong>Usage information</strong> such as pages
            visited, features used, device type, browser, IP address, and approximate location
            derived from IP.
          </li>
          <li>
            <strong>Communications</strong> including messages
            you send us through forms, email, or support channels.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> to
            operate the site, remember preferences, and understand how visitors use our services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our website and platform</li>
          <li>Respond to inquiries, demos, and support requests</li>
          <li>Send service-related notices and, where permitted, marketing communications</li>
          <li>Monitor usage, troubleshoot issues, and protect against fraud or abuse</li>
          <li>Comply with legal obligations and enforce our terms</li>
        </ul>
      </LegalSection>

      <LegalSection title="How we share information">
        <p>
          We do not sell your personal information. We may share information with service
          providers who help us operate our business (such as hosting, analytics, email, and
          payment processing), when required by law, or in connection with a merger,
          acquisition, or sale of assets. Providers are permitted to use information only to
          perform services on our behalf.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We retain information for as long as needed to provide our services, fulfill the
          purposes described in this policy, comply with legal obligations, resolve disputes,
          and enforce our agreements.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>
          You may opt out of marketing emails by using the unsubscribe link in those messages.
          You may disable cookies through your browser settings, though some site features may
          not function properly. Depending on your location, you may have additional rights to
          access, correct, delete, or restrict processing of your personal information.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use reasonable administrative, technical, and organizational measures designed to
          protect information. No method of transmission or storage is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="International transfers">
        <p>
          If you access our services from outside the country where we operate, your information
          may be transferred to and processed in jurisdictions that may have different data
          protection laws.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Our services are not directed to children under 16, and we do not knowingly collect
          personal information from them.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the revised policy on
          this page and update the &ldquo;Last updated&rdquo; date above.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          If you have questions about this Privacy Policy or our data practices, contact us at{' '}
          <a href="mailto:privacy@arivusystems.com">privacy@arivusystems.com</a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
