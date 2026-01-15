import React, { useState } from "react";

const sections = [
    {
        title: "Information We Collect",
        content:
            "We collect personal information such as name, email address, phone number, blood group, and location when you register as a donor or submit a blood request. This information is essential for connecting donors with recipients and ensuring timely support. We may also collect non-personal data such as browser type and usage statistics to improve our platform experience.",
    },
    {
        title: "How We Use Your Information",
        content:
            "Your information is used to facilitate blood donation services, emergency requests, volunteer coordination, and communication purposes. We use collected data to verify donor eligibility, notify users about urgent blood needs, and improve the overall reliability of our services. We do not use your personal data for unrelated commercial purposes.",
    },
    {
        title: "Data Protection & Security",
        content:
            "We prioritize the security of your data. Appropriate technical and organizational measures are implemented to protect personal information from unauthorized access, misuse, or disclosure. While we strive to protect your information, no digital platform can guarantee absolute security.",
    },
    {
        title: "Sharing of Information",
        content:
            "We do not sell, trade, or rent users’ personal information. Data may only be shared with authorized medical institutions, hospitals, or emergency coordinators strictly for life-saving purposes. Any sharing of data follows applicable laws and ethical standards.",
    },
    {
        title: "Cookies & Tracking",
        content:
            "Our platform may use cookies to enhance user experience, remember preferences, and analyze site traffic. Cookies help us understand how users interact with the platform so we can improve functionality. You may choose to disable cookies through your browser settings.",
    },
    {
        title: "User Rights",
        content:
            "Users have the right to access, update, or request deletion of their personal data. If you wish to modify your information or have concerns regarding privacy, you may contact our support team at any time.",
    },
];

const Privacy = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">

            {/* Header */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-error">Privacy Policy</h1>
                <p className="opacity-70 dark:text-gray-300 text-lg">
                    Your privacy is important to us. This policy explains how we collect,
                    use, and protect your personal information.
                </p>
                <p className="text-sm opacity-70">
                    Last Updated: January 2026
                </p>
            </section>

            {/* Intro Paragraph */}
            <section className="opacity-70 dark:text-gray-300 leading-relaxed">
                <p>
                    At Blood Donation Center, we are committed to safeguarding your privacy
                    and maintaining transparency regarding the information we collect.
                    This Privacy Policy outlines our practices concerning the collection,
                    use, and protection of personal data. By using our platform, you agree
                    to the terms described in this policy. Our services are designed to
                    connect donors, recipients, volunteers, and medical institutions in a
                    secure and ethical manner.
                </p>
            </section>

            {/* Accordion Sections */}
            <section className="space-y-4">
                {sections.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 hover:shadow-lg rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() =>
                                setActiveIndex(activeIndex === index ? null : index)
                            }
                            className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
                        >
                            <span>{item.title}</span>
                            <span>{activeIndex === index ? "−" : "+"}</span>
                        </button>

                        {activeIndex === index && (
                            <div className="px-6 pb-4 opacity-70 dark:text-gray-300">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* Final Paragraph */}
            <section className="opacity-70 dark:text-gray-300 leading-relaxed">
                <p>
                    We reserve the right to update this Privacy Policy as needed to reflect
                    changes in our services or legal requirements. Any updates will be
                    posted on this page. We encourage users to review this policy
                    periodically to stay informed about how their information is handled.
                    Your trust is vital to our mission of saving lives through blood
                    donation and community support.
                </p>
            </section>
            <section>
                <p className="opacity-70 dark:text-gray-300 leading-relaxed">
                    <span className="text-4xl text-red-500 font-bold">Data Retention Policy</span><br />

                    We retain personal information only for as long as it is necessary to fulfill the purposes outlined in this Privacy Policy. Donor and request-related data may be stored to maintain historical records, improve emergency response efficiency, and comply with legal or regulatory requirements. Once the data is no longer required, it is securely deleted or anonymized to prevent misuse. <br /> <br />

                    <span className="text-2xl text-red-500 font-bold">Third-Party Services</span><br />

                    Our platform may integrate with trusted third-party services such as authentication providers, analytics tools, or communication services. These third parties are granted limited access to personal data strictly to perform their designated functions. They are obligated to maintain confidentiality and comply with applicable data protection laws. We do not control third-party privacy practices and recommend reviewing their respective policies.
                    <br /> <br />
                    <span className="text-2xl text-red-500 font-bold">Children’s Privacy</span><br />

                    Our services are not intended for individuals under the age of 18 without parental or legal guardian consent. We do not knowingly collect personal data from minors. If such information is inadvertently collected, we will take immediate steps to remove it upon notification.
                    <br /> <br />
                    <span className="text-2xl text-red-500 font-bold">Legal Compliance & Disclosures</span><br />

                    We may disclose personal information when required by law, court order, or governmental request. Such disclosures are made only when legally obligated and strictly limited to the information necessary to comply with legal processes or protect the safety and rights of individuals.
                    <br /> <br />
                    <span className="text-2xl text-red-500 font-bold">Acceptance of This Policy</span><br />

                    By accessing or using our platform, users acknowledge that they have read, understood, and agreed to this Privacy Policy. Continued use of our services following any policy updates constitutes acceptance of the revised terms.
                    <br /> <br />
                    <span className="text-2xl text-red-500 font-bold">Communication Preferences</span><br />

                    Users may choose how they receive notifications, including emergency alerts, email updates, or SMS messages. You can modify your communication preferences at any time through your account settings or by contacting our support team.
                    <br /> <br />
                    <span className="text-2xl text-red-500 font-bold">Ethical Use of Data</span><br />
                    As a humanitarian-focused organization, we are committed to the ethical handling of all user data. Information collected is used solely for life-saving, community-building, and service improvement purposes. We do not exploit personal data for profit-driven activities.
                    <br /> <br />
                    <span className="text-2xl text-red-500 font-bold">International Data Transfers</span><br />

                    If users access our platform from outside the country, their information may be transferred and processed in jurisdictions with different data protection regulations. In such cases, we ensure that appropriate safeguards are in place to protect user data.
                    <br /> <br />
                    <span className="text-2xl text-red-500 font-bold">Contact Information</span><br />
                    If you have questions, concerns, or complaints regarding this Privacy Policy or the handling of your personal information, you may contact us directly. We are committed to addressing privacy-related issues promptly and transparently.
                </p>
            </section>

        </div>
    );
};

export default Privacy;
