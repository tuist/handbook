---
title: Shared responsibility model
titleTemplate: :title | Security | Tuist Handbook
description:
---

# Shared responsibility model

At Tuist, we rely on trusted infrastructure providers, such as [Fly.io](https://fly.io) and [Tigris](https://tigrisdata.com), to manage key aspects of our infrastructure security. These partnerships enable us to deliver reliable and secure services while focusing on application and data-level security.

This document outlines the shared responsibility model between Tuist and its infrastructure providers, detailing the security areas managed by each party.

## Fly.io: Security Responsibilities

[Fly.io](https://fly.io) ensures the security of its platform through the following mechanisms:

### **Fly.io's Responsibilities:**
1. **Data Center Security**
   - Physical access control, environmental safeguards, and compliance with industry standards (e.g., SOC 2, ISO 27001).
2. **Network Security**
   - Firewall protection, DDoS mitigation, and secure routing of traffic across their global network.
3. **Platform Updates and Patch Management**
   - Continuous monitoring and patching of vulnerabilities in the Fly.io platform and underlying infrastructure.
4. **Application Security (AppSec)**
   - Secure isolation of customer workloads to prevent unauthorized access between applications running on their platform.

For more details, refer to Fly.io's [Shared Responsibility Model](https://fly.io/docs/security/shared-responsibility/) and [Application Security](https://fly.io/docs/security/security-at-fly-io/#application-security-appsec).

### **Tuist's Responsibilities on Fly.io:**
- Securing the Tuist application code and dependencies.
- Managing access controls and encryption for data at rest and in transit.
- Implementing monitoring and incident response measures for application-layer threats.

## Tigris: Security Responsibilities

[Tigris](https://tigrisdata.com) provides a secure data platform that adheres to strict privacy and security standards.

### **Tigris's Responsibilities:**
1. **Infrastructure Security**
   - Secure management of the underlying infrastructure, including server and storage security.
2. **Data Encryption**
   - Encryption of data in transit (TLS) and at rest using robust cryptographic protocols.
3. **Access Control**
   - Ensuring role-based access control (RBAC) and secure API integrations.

For additional details, review Tigris’s [Privacy Policy](https://www.tigrisdata.com/docs/legal/privacy-policy/#6-security).

### **Tuist's Responsibilities on Tigris:**
- Implementing proper database access controls.
- Encrypting sensitive data before storing it in Tigris.
- Regularly auditing and monitoring database usage and queries for anomalies.

## Shared Responsibility Benefits

This shared responsibility model allows Tuist to:
- Leverage the expertise of infrastructure providers for foundational security.
- Focus on securing its application logic, user data, and business operations.
- Continuously improve security practices by collaborating with trusted partners.

By maintaining clear boundaries of responsibility, we ensure the highest security standards for our services while effectively managing risks.

---

If you have questions about this model, please reach out to the security team at [security@tuist.dev](mailto:security@tuist.dev).
