---
title: Penetration Testing Policy
titleTemplate: :title | Secure development and operations | Security | Tuist Handbook
description: Policy detailing the requirements for regularly scheduled penetration testing of Tuist GmbH systems and applications.
---

# Penetration Testing Policy

- **Policy owner:** Pedro Piñera Buendía
- **Effective Date:** June 5th, 2025

## Purpose

This policy establishes the requirements for regular penetration testing of Tuist GmbH's applications, servers, and network infrastructure to identify security vulnerabilities that could potentially be exploited by malicious actors. Regular penetration testing is a critical component of Tuist's security program that helps ensure the confidentiality, integrity, and availability of our systems and data.

## Scope

This policy applies to all applications, servers, and cloud resources owned, operated, or maintained by Tuist GmbH that are business-critical and/or process, store, or transmit Confidential data. It applies to all employees, contractors, and third parties who manage or develop systems for Tuist GmbH.

The scope of penetration testing is explicitly governed by Tuist's [Shared Responsibility Model](/security/shared-responsibility-model), which delineates security responsibilities between Tuist and its infrastructure providers, including Fly.io.

## Policy Statement

Tuist GmbH shall perform penetration testing **at least annually** on all applications and cloud resources that are business-critical and/or process, store, or transmit Confidential data. These tests will focus on components that Tuist is responsible for according to the Shared Responsibility Model. Additional penetration testing may be required following significant infrastructure or application changes, or as required by customers, regulations, or compliance frameworks.

## Shared Responsibility for Security Testing

As outlined in our [Shared Responsibility Model](/security/shared-responsibility-model), Tuist relies on trusted infrastructure providers for certain security aspects:

### Provider Responsibilities:

- **Fly.io** is responsible for network-level security testing, including:
  - Network infrastructure penetration testing
  - Firewall configuration testing
  - DDoS mitigation testing
  - Network routing security testing

- **Tigris** and **Supabase** are responsible for testing the security of their underlying infrastructure and platform services.

### Tuist's Responsibilities:

Tuist GmbH is responsible for penetration testing of:
- Our web applications and APIs
- Authentication and authorization mechanisms
- Application-level security controls
- Our configuration and usage of cloud resources
- Data handling and storage practices within our applications

## Penetration Testing Requirements

### 1. Frequency and Timing

- Comprehensive penetration testing of Tuist-managed components shall be conducted at least once per calendar year
- Additional testing shall be conducted after significant application changes
- Testing shall be scheduled to minimize impact on business operations

### 2. Testing Methodologies

All penetration testing must follow industry-standard methodologies and frameworks, including but not limited to:
- OWASP Testing Guide
- NIST SP 800-115
- Penetration Testing Execution Standard (PTES)

### 3. Types of Testing

Penetration testing shall include, at minimum:
- Web application testing
- API security testing
- Cloud resource configuration assessment
- Authentication and authorization controls testing
- Social engineering tests (when applicable)

### 4. Testing Resources

Penetration testing may be conducted by:
- Qualified third-party security firms
- Internal security personnel with appropriate qualifications
- A combination of internal and external resources

### 5. Pre-Testing Requirements

Before penetration testing begins:
- Testing scope and objectives must be clearly defined, adhering to the Shared Responsibility Model
- Testing timeline must be established and communicated
- Rules of engagement must be documented
- Explicit written approval must be obtained from relevant stakeholders
- Data handling procedures must be established for any sensitive information discovered
- When testing involves cloud infrastructure, ensure compliance with the cloud provider's penetration testing policies and obtain necessary approvals

### 6. Post-Testing Requirements

After penetration testing concludes:
- A comprehensive report must be produced detailing findings and recommendations
- Vulnerabilities must be categorized by severity (Critical, High, Medium, Low)
- Findings must be documented in the vulnerability management system
- A remediation plan must be developed with clear timelines based on severity

### 7. Remediation Timelines

Vulnerabilities discovered during penetration testing shall be remediated according to the following timelines:
- Critical: Within 7 days
- High: Within 30 days
- Medium: Within 60 days
- Low: Within 90 days

### 8. Documentation and Record Keeping

The following documentation must be maintained for all penetration tests:
- Testing scope and methodology
- Test results and identified vulnerabilities
- Remediation plans and status
- Evidence of remediation for all identified issues
- Final sign-off documenting completion of remediation activities

All penetration testing documentation shall be retained for a minimum of 3 years.

## Evidence Collection

To satisfy audit and compliance requirements, Tuist shall:

1. Obtain and maintain documentation from our cloud providers (Fly.io, Tigris, Supabase) regarding their penetration testing practices and results where available
2. Document our own penetration testing activities for components under Tuist's responsibility
3. Maintain evidence that penetration tests are conducted annually as required by this policy

## Roles and Responsibilities

### IT Manager/Security Lead
- Ensures penetration tests are scheduled and performed at required intervals for Tuist-managed components
- Reviews and approves the scope and methodology of penetration tests
- Reviews penetration test results and ensures appropriate remediation actions are taken
- Coordinates with cloud infrastructure providers as needed regarding security testing

### Development and Operations Teams
- Assist in preparing systems for penetration testing
- Implement remediation measures for identified vulnerabilities
- Provide verification that vulnerabilities have been remediated

### Third-Party Testing Providers
- Conduct penetration tests according to agreed-upon scope and methodology
- Provide detailed reports of findings with clear remediation recommendations
- Maintain confidentiality of all information discovered during testing

## Exceptions

Any exceptions to this policy must be documented and approved by the IT Manager and the Chief Technology Officer. Exceptions shall be documented with:
- The specific reason for the exception
- The scope and duration of the exception
- Any compensating controls implemented
- Approval signatures from authorized personnel

## Violations & Enforcement

Any known violations of this policy should be reported to the IT Manager. Violations of this policy can result in immediate withdrawal or suspension of system and network privileges and/or disciplinary action in accordance with company procedures up to and including termination of employment.

## Version History

The version history of this document can be found in Tuist's [handbook](https://github.com/tuist/handbook) repository.
