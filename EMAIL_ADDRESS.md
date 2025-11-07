# Organization Email Setup (`resilience-inc.global`)

This guide explains how to replace the personal mailbox `wvanheemstra@icloud.com` with the organization address `willem.van.heemstra@resilience-inc.global`, using Versio as the domain registrar and email hosting provider.

---

## 1. Prepare Your Versio Account

1. Log in to [Versio Control Panel](https://www.versio.nl/cp/).
2. Open **Domeinen** → select `resilience-inc.global`.
3. Ensure you have an email hosting plan. If not, add **E-mail & Hosting → E-mail only** (their standalone mailbox service) or upgrade to a hosting bundle that includes mailboxes.

> **Alternative:** If you prefer an external provider (e.g., Microsoft 365, Google Workspace, Zoho Mail) you can still manage DNS at Versio. The MX/SPF/DKIM steps below remain applicable—just substitute the records issued by your provider.

---

## 2. Create the Mailbox `willem.van.heemstra`

1. Inside the Versio control panel go to **E-mail** → **Mailboxen** → **Nieuwe mailbox**.
2. Enter the mailbox name `willem.van.heemstra`.
3. Set a strong password (store it in a password manager).
4. Save changes. Versio will provision the inbox instantly.
5. Note the IMAP/SMTP settings displayed (hostname, ports, SSL requirements). You’ll need them for step 5.

> If you only need forwarding, create an **Alias** that forwards all mail for `willem.van.heemstra@resilience-inc.global` to any destination. However, a full mailbox is recommended to maintain a verifiable sender address for Formspree and outbound mail.

---

## 3. Configure DNS Records at Versio

Open **Domeinen** → select `resilience-inc.global` → **DNS beheer** → **Geavanceerd** and ensure the following records exist:

### MX (mail delivery)

| Type | Host | Value | Priority |
| ---- | ---- | ----- | -------- |
| MX | @ | `mx1.versio.nl` | 10 |
| MX | @ | `mx2.versio.nl` | 20 |
| MX | @ | `mx3.versio.nl` | 30 |

> If you use another provider, replace these with the MX records they supply. Remove outdated MX entries to avoid delivery issues.

### SPF (sender policy)

Add or update a TXT record at host `@`:

```
v=spf1 include:_spf.versio.nl ~all
```

Only one SPF record should exist. If you already have one, merge the directives.

### DKIM (optional but recommended)

1. In Versio email settings, generate a DKIM key pair (if available; otherwise produce it with your email provider).
2. Add a TXT record with the selector they provide, e.g.:

```
Type: TXT
Host: default._domainkey
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...
```

### DMARC (visibility & alignment)

Add a TXT record:

```
Host: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@resilience-inc.global; fo=1
```

> Adjust the policy (`p=`) once you are confident mail is aligned (`reject` for stricter enforcement).

DNS changes can take up to 24 hours, but typically propagate in minutes.

---

## 4. Verify and Enable the Mailbox

1. Use Versio Webmail or your email client (see step 5) to log in as `willem.van.heemstra@resilience-inc.global`.
2. Send a test message to a personal address and reply to confirm both outbound and inbound flow.
3. Use [https://www.mail-tester.com](https://www.mail-tester.com) or Google’s CheckMX to verify SPF/DKIM/DMARC alignment.

---

## 5. Configure Mail Clients (Optional)

### IMAP/SMTP (Versio defaults)

- **Incoming (IMAP):** `imap.versio.nl`, port 993, SSL/TLS, username = full email address, password = mailbox password
- **Outgoing (SMTP):** `smtp.versio.nl`, port 587, STARTTLS, same credentials

Applications:

- Outlook / Apple Mail / Thunderbird: add a new account with IMAP + SMTP settings.
- Mobile (iOS/Android): use the same server names, port 993/587.

> If you use another provider, follow their client configuration instructions.

---

## 6. Update Formspree Notification Email

1. Sign in to Formspree and open the project that handles this website.
2. Navigate to the form connected to `contact.html`.
3. Change the recipient email to `willem.van.heemstra@resilience-inc.global` and save.
4. Formspree will send a confirmation message. Approve it from the new mailbox.
5. Submit a live test via the website to confirm delivery.

> If you rely on aliases or multiple recipients, add them within Formspree’s dashboard.

---

## 7. Update Website References

The repository has already been updated to reference the new address, but keep this checklist handy when duplicating or modifying pages:

| File | Location | What to change |
| ---- | -------- | -------------- |
| `index.html` | Footer contact link | `mailto:willem.van.heemstra@resilience-inc.global` |
| `contact.html` | Contact card + footer | Same as above |
| `thank-you.html` | Follow-up instructions + footer | Same as above |
| `README.md`, `QUICKSTART.md`, `SETUP_GUIDE.md`, `CUSTOM_DOMAIN_GUIDE.md` | Documentation sections | Update sample/setup email |
| `contact.html` | Formspree setup notes | Ensure `_subject` and Formspree account align |

After editing, re-run a sample submission and check the inbox.

---

## 8. Optional: Forward Legacy Mail

If `wvanheemstra@icloud.com` was publicly shared, configure a forwarding rule at your old provider to route those messages to the new mailbox. Maintain the forward until you are confident all contacts use the new address.

---

## 9. Maintenance & Security

- Rotate the mailbox password periodically (every 6–12 months).
- Enable MFA on the Versio control panel and any connected services (Formspree, email clients).
- Monitor DMARC reports (if using `rua=`) to spot spoofing attempts.
- Re-run [mail-tester.com](https://www.mail-tester.com) after major DNS changes.

---

### Quick Checklist

- [ ] Mail hosting active at Versio (or alternative provider)
- [ ] Mailbox `willem.van.heemstra@resilience-inc.global` created
- [ ] MX/SPF/DKIM/DMARC records published
- [ ] Mail client/Webmail tested (send & receive)
- [ ] Formspree recipient updated and confirmed
- [ ] Website links & docs updated to new address
- [ ] Legacy address forwarding (optional)
- [ ] Deliverability verified with mail-tester or equivalent

Once all boxes are checked, the organization email address is fully operational and integrated into the website.

