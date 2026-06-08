const defaultInviteTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Indian Space Hub | Early Access Invitation</title>
</head>

<body style="margin:0;padding:0;background-color:#0b1120;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0b1120;padding:40px 15px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#111827;border-radius:20px;overflow:hidden;border:1px solid #1f2937;">

    <!-- Hero Image -->
    <tr>
        <td>
            <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                alt="Indian Space Hub"
                width="600"
                style="display:block;width:100%;height:auto;border:0;">
        </td>
    </tr>

    <!-- Header -->
    <tr>
                <td align="center" style="padding:35px 30px 10px 30px;">
                            <h1 style="
            margin: 0;
            font-size: 38px;
            font-weight: 700;
            letter-spacing: 0.05em;
            font-family: 'Marcellus', 'Playfair Display', serif;
            background: linear-gradient(135deg, #bf953f 0%, #fcf6ba 50%, #aa771c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: flex;
            align-items: center;
            gap: 12px;
        ">
            <span style="-webkit-text-fill-color: initial;"></span> Early Access Invitation
        </h1>
        </td>
    </tr>

    <!-- Content -->
    <tr>
        <td style="padding:15px 35px 35px 35px;">

            <h2 style="margin:0 0 20px 0;color:#ffffff;font-size:26px;">
                Welcome, {{first_name}} {{last_name}}
            </h2>

            <p style="margin:0 0 20px 0;color:#d1d5db;font-size:16px;line-height:1.7;">
                Congratulations! You have been selected for exclusive
                <strong>Early Access</strong> to the
                <strong>Indian Space Hub</strong> mobile application.
            </p>

            <p style="margin:0 0 24px 0;color:#d1d5db;font-size:16px;line-height:1.7;">
                As one of our early users, you'll get a first look at upcoming
                features, explore the platform before public release, and help
                shape the future of the experience through your valuable feedback.
            </p>

            <!-- Play Store Badge -->
            <div style="text-align:center;padding-top:35px;padding-bottom:20px;">
                <a href="{{play_store_link}}" target="_blank">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Download on Google Play"
                        width="220"
                        style="border:0;display:inline-block;">
                </a>
            </div>

            <p style="margin:0;color:#9ca3af;font-size:15px;line-height:1.7;text-align:center;">
                Download the app from Google Play and start exploring today.
            </p>

            <p style="margin-top:35px;color:#ffffff;font-size:15px;line-height:1.7;">
                Thank you for being part of this journey.<br>
                <strong>Indian Space Hub Team</strong>
            </p>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td align="center"
            style="padding:22px;background:#0f172a;border-top:1px solid #1f2937;">
            <p style="margin:0;color:#6b7280;font-size:13px;">
                © 2026 Indian Space Hub. All rights reserved.
            </p>
        </td>
    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>`;

const spaceHubTemplate = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Indian Space Hub | Aurora</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: Helvetica, Arial, sans-serif; color: #ffffff;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000;">
<tr>
<td align="center" style="padding: 40px 20px;">
    <img src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=150&auto=format&fit=crop" alt="ISH Logo" style="width: 80px; height: 80px; border-radius: 20px; margin-bottom: 16px;">
    <div style="font-size: 12px; letter-spacing: 4px; color: #93c5fd; text-transform: uppercase; margin-bottom: 40px;">Indian Space Hub</div>
    
    <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 24px; border: 1px solid #1e293b;">
        <tr>
            <td style="padding: 40px; text-align: center;">
                <div style="display: inline-block; padding: 8px 16px; background-color: rgba(59, 130, 246, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 20px; color: #93c5fd; font-size: 14px; margin-bottom: 24px;">🚀 Alpha Phase 1.0</div>
                <h1 style="font-size: 36px; margin: 0 0 20px 0; color: #ffffff; line-height: 1.2;">The Future of Exploration</h1>
                <p style="font-size: 18px; color: #94a3b8; line-height: 1.6; margin: 0 0 32px 0;">Hello {{first_name}}, join a select group of pioneers testing India's next-generation space telemetry.</p>
                <a href="#" style="display: inline-block; padding: 18px 36px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px;">Get Access on Play Store</a>
            </td>
        </tr>
    </table>
    <div style="margin-top: 40px; color: #475569; font-size: 12px;">© 2026 Indian Space Hub. All rights reserved.</div>
</td>
</tr>
</table>
</body>
</html>`;

const modernUpdateTemplate = `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding: 40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <tr><td align="center" style="padding: 40px;">
            <div style="background-color: #e0e7ff; width: 64px; height: 64px; border-radius: 32px; line-height: 64px; font-size: 24px; margin-bottom: 24px;">✨</div>
            <h2 style="color: #0f172a; margin: 0 0 16px 0;">Major Product Update</h2>
            <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">Hi {{first_name}}, we've just rolled out significant improvements to your dashboard experience based on your valuable feedback.</p>
            <table width="100%" style="background-color: #f1f5f9; border-radius: 8px; margin-bottom: 24px;">
                <tr><td style="padding: 20px; color: #334155; font-size: 14px; line-height: 1.6;">
                    • <b>Lightning Fast:</b> 3x faster load times.<br>
                    • <b>Dark Mode:</b> Easy on the eyes.<br>
                    • <b>Better Security:</b> Upgraded encryption protocols.
                </td></tr>
            </table>
            <a href="#" style="display: inline-block; padding: 14px 28px; background-color: #4f46e5; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;">Explore Updates</a>
        </td></tr>
    </table>
</td></tr>
</table>
</body></html>`;

const modernNewsletterTemplate = `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background-color: #fafafa; font-family: sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding: 40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-top: 6px solid #10b981; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <tr><td style="padding: 40px;">
            <h2 style="color: #065f46; margin: 0 0 8px 0;">Weekly Insights</h2>
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 24px 0;">Issue #42 • October 2026</p>
            <h3 style="color: #111827;">Hello {{first_name}} {{last_name}},</h3>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">Here is your weekly roundup of the most important industry news, hand-curated by our team.</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            <a href="#" style="color: #10b981; text-decoration: none; font-weight: bold;">Read Full Issue &rarr;</a>
        </td></tr>
    </table>
</td></tr>
</table>
</body></html>`;

const webinarTemplate = `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding: 40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px rgba(0,0,0,0.05);">
        <tr><td style="background-color: #8b5cf6; padding: 40px; text-align: center;">
            <p style="color: #ddd6fe; font-weight: bold; letter-spacing: 2px; margin: 0 0 12px 0; text-transform: uppercase;">Live Masterclass</p>
            <h1 style="color: #ffffff; margin: 0; font-size: 32px;">Mastering Campaign Delivery</h1>
        </td></tr>
        <tr><td style="padding: 40px;">
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">Hi {{first_name}}, join our expert panel this Thursday to learn the secrets of achieving 99% email deliverability rates.</p>
            <table width="100%" style="margin-bottom: 32px;">
                <tr>
                    <td width="50%" style="background-color: #f5f3ff; padding: 16px; border-radius: 8px;">
                        <strong style="color: #6d28d9; display: block; margin-bottom: 4px;">Date</strong>
                        <span style="color: #4b5563;">Thursday, Oct 15</span>
                    </td>
                    <td width="16"></td>
                    <td width="50%" style="background-color: #f5f3ff; padding: 16px; border-radius: 8px;">
                        <strong style="color: #6d28d9; display: block; margin-bottom: 4px;">Time</strong>
                        <span style="color: #4b5563;">2:00 PM EST</span>
                    </td>
                </tr>
            </table>
            <a href="#" style="display: block; text-align: center; padding: 16px; background-color: #8b5cf6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px;">Save Your Seat</a>
        </td></tr>
    </table>
</td></tr>
</table>
</body></html>`;

const defaultTemplates = [
    {
        id: 'space_hub_aurora',
        name: 'Space Hub Aurora',
        subject: 'Welcome to the Future of Space Exploration',
        body: spaceHubTemplate
    },
    {
        id: 'early_access',
        name: 'Early Access Invitation',
        subject: 'You are invited: Early Access Program',
        body: defaultInviteTemplate
    },
    {
        id: 'product_update',
        name: 'Modern Product Update',
        subject: 'Important Product Update',
        body: modernUpdateTemplate
    },
    {
        id: 'newsletter',
        name: 'Modern Newsletter',
        subject: 'Weekly Insights',
        body: modernNewsletterTemplate
    },
    {
        id: 'webinar',
        name: 'Event Webinar Registration',
        subject: 'You are invited: Live Masterclass',
        body: webinarTemplate
    }
];

document.addEventListener('alpine:init', () => {
    Alpine.data('emailApp', () => ({
        // General State
        currentTab: 'settings',
        sidebarOpen: false,
        theme: localStorage.getItem('theme') || 'dark',
        
        // Navigation
        tabs: [
            { id: 'settings', name: 'SMTP Settings', icon: 'fa-solid fa-cogs' },
            { id: 'contacts', name: 'Contacts', icon: 'fa-solid fa-users' },
            { id: 'templates', name: 'Templates & Composer', icon: 'fa-solid fa-file-code' },
            { id: 'console', name: 'Sending Console', icon: 'fa-solid fa-paper-plane' },
            { id: 'analytics', name: 'Analytics', icon: 'fa-solid fa-chart-line' }
        ],

        // Data Models
        smtp: {
            host: '',
            port: '587',
            username: '',
            password: '',
            senderName: '',
            senderEmail: ''
        },
        
        contacts: [],
        contactsPage: 1,
        contactsPerPage: 10,
        contactsSearch: '',
        
        newContact: {
            email: '',
            first_name: '',
            last_name: ''
        },
        
        customVars: [
            { key: 'play_store_link', value: 'https://play.google.com/store/apps/details?id=com.veerexa.school' }
        ],
        
        templates: [...defaultTemplates],
        selectedTemplateId: '',
        
        draft: {
            subject: '',
            body: ''
        },
        
        // Sending Campaign State
        campaign: {
            isSending: false,
            isPaused: false,
            progress: 0,
            sent: parseInt(localStorage.getItem('analytics_sent') || '0'),
            failed: parseInt(localStorage.getItem('analytics_failed') || '0'),
            logs: [], // { type: 'info|success|error', message: '...', time: '...' }
            currentIndex: 0,
            rateLimit: 1 // seconds between emails
        },
        
        testEmail: '',
        
        // UI Helpers
        toast: { show: false, message: '', type: 'info' },

        init() {
            // Apply Theme
            if (this.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            // Load settings from localStorage
            const savedSmtp = localStorage.getItem('smtp_settings');
            if (savedSmtp) {
                this.smtp = JSON.parse(savedSmtp);
            }
            
            const savedDraft = localStorage.getItem('draft_email');
            if (savedDraft) {
                this.draft = JSON.parse(savedDraft);
            }
            
            const savedContacts = localStorage.getItem('contacts');
            if (savedContacts) {
                this.contacts = JSON.parse(savedContacts);
            }
            
            const savedTemplateId = localStorage.getItem('selectedTemplateId');
            if (savedTemplateId) {
                this.selectedTemplateId = savedTemplateId;
            }
            
            const savedCustomVars = localStorage.getItem('customVars');
            if (savedCustomVars) {
                this.customVars = JSON.parse(savedCustomVars);
            }

            // Watch for draft changes to update preview
            this.$watch('draft.body', () => {
                this.updatePreview();
                this.saveDraft();
            });
            this.$watch('draft.subject', () => {
                this.saveDraft();
            });
        },

        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', this.theme);
            if (this.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        showToast(message, type = 'info') {
            this.toast = { show: true, message, type };
            setTimeout(() => {
                this.toast.show = false;
            }, 3000);
        },

        // --- Settings Methods ---
        saveSmtpSettings() {
            localStorage.setItem('smtp_settings', JSON.stringify(this.smtp));
            this.showToast('SMTP settings saved successfully!', 'success');
        },

        // --- Contact Methods ---
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    // Filter and map valid contacts
                    const newContacts = results.data
                        .filter(row => row.email && row.email.includes('@'))
                        .map(row => ({
                            email: row.email.trim(),
                            first_name: row.first_name ? row.first_name.trim() : '',
                            last_name: row.last_name ? row.last_name.trim() : ''
                        }));
                    
                    if (newContacts.length > 0) {
                        this.contacts = newContacts;
                        localStorage.setItem('contacts', JSON.stringify(this.contacts));
                        this.showToast(`Imported ${this.contacts.length} valid contacts.`, 'success');
                    } else {
                        this.showToast('No valid contacts found in CSV.', 'error');
                    }
                    event.target.value = ''; // reset file input
                },
                error: (error) => {
                    this.showToast(`Error parsing CSV: ${error.message}`, 'error');
                }
            });
        },
        
        clearContacts() {
            if(confirm('Are you sure you want to clear all contacts?')) {
                this.contacts = [];
                localStorage.removeItem('contacts');
                this.showToast('Contacts cleared.', 'info');
            }
        },

        addManualContact() {
            const email = this.newContact.email.trim();
            if (!email || !email.includes('@')) {
                this.showToast('Please enter a valid email address.', 'error');
                return;
            }
            
            // Check if already exists
            if (this.contacts.some(c => c.email.toLowerCase() === email.toLowerCase())) {
                this.showToast('Contact already exists in the list.', 'error');
                return;
            }

            this.contacts.unshift({
                email: email,
                first_name: this.newContact.first_name.trim(),
                last_name: this.newContact.last_name.trim()
            });
            
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
            this.showToast('Contact added successfully!', 'success');
            
            // Reset form
            this.newContact = { email: '', first_name: '', last_name: '' };
        },

        get filteredContacts() {
            if (!this.contactsSearch) return this.contacts;
            const search = this.contactsSearch.toLowerCase();
            return this.contacts.filter(c => 
                c.email.toLowerCase().includes(search) || 
                c.first_name.toLowerCase().includes(search) || 
                c.last_name.toLowerCase().includes(search)
            );
        },

        get paginatedContacts() {
            const start = (this.contactsPage - 1) * this.contactsPerPage;
            const end = start + this.contactsPerPage;
            return this.filteredContacts.slice(start, end);
        },

        get totalPages() {
            return Math.ceil(this.filteredContacts.length / this.contactsPerPage) || 1;
        },

        // --- Template Methods ---
        loadSelectedTemplate() {
            if (!this.selectedTemplateId) return;
            const template = this.templates.find(t => t.id === this.selectedTemplateId);
            if (template) {
                this.draft.subject = template.subject;
                this.draft.body = template.body;
                localStorage.setItem('selectedTemplateId', this.selectedTemplateId);
                this.showToast('Template loaded.', 'success');
            }
        },

        saveDraft() {
            localStorage.setItem('draft_email', JSON.stringify(this.draft));
            localStorage.setItem('customVars', JSON.stringify(this.customVars));
        },

        replaceVariables(text, contact) {
            if (!text || !contact) return text || '';
            let result = text
                .replace(/{{first_name}}/g, contact.first_name || '')
                .replace(/{{last_name}}/g, contact.last_name || '')
                .replace(/{{email}}/g, contact.email || '');
            
            // Replace custom variables
            if (this.customVars && this.customVars.length > 0) {
                this.customVars.forEach(v => {
                    if (v.key) {
                        const regex = new RegExp(`{{${v.key}}}`, 'g');
                        result = result.replace(regex, v.value);
                    }
                });
            }
            return result;
        },

        updatePreview() {
            const iframe = document.getElementById('preview-iframe');
            if (iframe) {
                const doc = iframe.contentWindow.document;
                doc.open();
                
                // Use a dummy contact for preview
                const dummyContact = {
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john@example.com'
                };
                
                doc.write(this.replaceVariables(this.draft.body, dummyContact));
                doc.close();
            }
        },

        // --- Sending Methods ---
        async sendSingleEmail(contact, isTest = false) {
            if (!this.smtp.host || !this.smtp.username || !this.smtp.password) {
                throw new Error("SMTP Settings are incomplete.");
            }

            const subject = this.replaceVariables(this.draft.subject, contact);
            const body = this.replaceVariables(this.draft.body, contact);
            
            let toField = contact.email;
            if (contact.first_name || contact.last_name) {
                const name = `${contact.first_name || ''} ${contact.last_name || ''}`.trim();
                toField = `"${name}" <${contact.email}>`;
            }

            // Local SMTP Proxy implementation
            const sendEmail = function(a) {
                return new Promise(function(resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "http://localhost:3000/send", true);
                    xhr.setRequestHeader("Content-type", "application/json");
                    xhr.onload = function() {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            try {
                                const response = JSON.parse(xhr.responseText);
                                if (response.message === "OK") {
                                    resolve("OK");
                                } else {
                                    reject(new Error(response.error || "Unknown Error"));
                                }
                            } catch (e) {
                                resolve("OK"); // Fallback if not JSON
                            }
                        } else {
                            try {
                                const response = JSON.parse(xhr.responseText);
                                reject(new Error(response.error || `Server Error ${xhr.status}`));
                            } catch (e) {
                                reject(new Error(`Server Error ${xhr.status}`));
                            }
                        }
                    };
                    xhr.onerror = function() {
                        reject(new Error("Network Error: Make sure you are running 'node server.js' in the background!"));
                    };
                    xhr.send(JSON.stringify({
                        Host: a.Host,
                        Port: a.Port || 587,
                        Username: a.Username,
                        Password: a.Password,
                        To: a.To,
                        From: a.From,
                        Subject: a.Subject,
                        Body: a.Body
                    }));
                });
            };

            return new Promise((resolve, reject) => {
                sendEmail({
                    Host: this.smtp.host,
                    Username: this.smtp.username,
                    Password: this.smtp.password,
                    To: toField,
                    From: `${this.smtp.senderName} <${this.smtp.senderEmail}>`,
                    Subject: subject,
                    Body: body,
                }).then(
                    message => {
                        if (message === "OK") {
                            resolve(message);
                        } else {
                            reject(new Error(message));
                        }
                    }
                ).catch(err => reject(err));
            });
        },

        async sendTestEmail() {
            if (!this.testEmail) {
                this.showToast('Please enter a test email address', 'error');
                return;
            }
            
            try {
                this.addLog('info', `Sending test email to ${this.testEmail}...`);
                await this.sendSingleEmail({ 
                    email: this.testEmail, 
                    first_name: 'Test', 
                    last_name: 'User' 
                }, true);
                
                this.addLog('success', `Test email sent to ${this.testEmail}`);
                this.showToast('Test email sent!', 'success');
            } catch (error) {
                this.addLog('error', `Failed test email: ${error.message}`);
                this.showToast(`Error: ${error.message}`, 'error');
            }
        },

        async startCampaign() {
            if (this.contacts.length === 0) {
                this.showToast('No contacts imported!', 'error');
                return;
            }
            if (!this.draft.subject || !this.draft.body) {
                this.showToast('Draft is empty!', 'error');
                return;
            }
            if (!confirm(`Are you sure you want to send this campaign to ${this.contacts.length} contacts?`)) {
                return;
            }

            this.campaign.isSending = true;
            this.campaign.isPaused = false;
            this.currentTab = 'console';
            this.addLog('info', `Campaign started for ${this.contacts.length} contacts.`);

            this.processQueue();
        },

        pauseCampaign() {
            this.campaign.isPaused = true;
            this.addLog('info', 'Campaign paused.');
        },

        resumeCampaign() {
            this.campaign.isPaused = false;
            this.addLog('info', 'Campaign resumed.');
            this.processQueue();
        },

        resetCampaign() {
            this.campaign.isSending = false;
            this.campaign.isPaused = false;
            this.campaign.currentIndex = 0;
            this.campaign.progress = 0;
            this.campaign.logs = [];
        },

        async processQueue() {
            while (this.campaign.isSending && !this.campaign.isPaused && this.campaign.currentIndex < this.contacts.length) {
                const contact = this.contacts[this.campaign.currentIndex];
                
                try {
                    this.addLog('info', `Sending to ${contact.email}...`);
                    await this.sendSingleEmail(contact);
                    
                    this.campaign.sent++;
                    localStorage.setItem('analytics_sent', this.campaign.sent);
                    this.addLog('success', `Delivered to ${contact.email}`);
                } catch (error) {
                    this.campaign.failed++;
                    localStorage.setItem('analytics_failed', this.campaign.failed);
                    this.addLog('error', `Failed ${contact.email}: ${error.message}`);
                }

                this.campaign.currentIndex++;
                this.campaign.progress = Math.round((this.campaign.currentIndex / this.contacts.length) * 100);

                // Wait for rate limit (in ms)
                if (this.campaign.currentIndex < this.contacts.length) {
                    await new Promise(r => setTimeout(r, this.campaign.rateLimit * 1000));
                }
            }

            if (this.campaign.currentIndex >= this.contacts.length) {
                this.campaign.isSending = false;
                this.addLog('success', 'Campaign finished!');
                this.showToast('Campaign completed!', 'success');
            }
        },

        addLog(type, message) {
            const time = new Date().toLocaleTimeString();
            this.campaign.logs.unshift({ type, message, time });
            // Keep only last 100 logs in memory
            if (this.campaign.logs.length > 100) {
                this.campaign.logs.pop();
            }
        },

        // --- Analytics Methods ---
        getSuccessRate() {
            const totalSent = this.campaign.sent + this.campaign.failed;
            if (totalSent === 0) return '0%';
            return Math.round((this.campaign.sent / totalSent) * 100) + '%';
        }
    }));
});
