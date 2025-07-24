import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, FileText } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={"p-6 max-w-4xl mx-auto space-y-6 transition-colors " + (dark ? "bg-black text-white" : "bg-white text-black")}>      
      <header className="text-center">
        <h1 className="text-4xl font-bold">Jacob Cudiamat</h1>
        <p className="text-lg">Cybersecurity Engineer | Web Developer | Analyst</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:jacob.k.cudiamat@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="tel:+14243372222"><Phone className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/jacob-cudiamat" target="_blank"><Linkedin className="w-5 h-5" /></a>
          <a href="/Jacob_Cudiamat_Cover_Letter.pdf" target="_blank" title="Cover Letter"><FileText className="w-5 h-5" /></a>
        </div>
        <Button className="mt-4" onClick={() => setDark(!dark)}>
          Toggle {dark ? "Light" : "Dark"} Mode
        </Button>
      </header>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
          <p>
            Cybersecurity Engineering graduate with hands-on experience in vulnerability management,
            secure network design, and incident response. Skilled in penetration testing, SIEM integration,
            and Zero Trust architectures. Strong project-based experience across offensive and defensive operations.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Core Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Security Tools:</strong> Nessus, Nmap, Metasploit, Splunk, Wireshark</li>
            <li><strong>Systems & Networks:</strong> Kali Linux, Ubuntu, AWS, VPNs</li>
            <li><strong>Languages:</strong> Python, Java, C++</li>
            <li><strong>Standards:</strong> NIST SP 800-171, ISO 27000</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <p className="font-bold">Cybersecurity Analyst – Torero Consulting Group (Jan–Mar 2025)</p>
          <ul className="list-disc list-inside">
            <li>Reduced vulnerabilities by 60% using Nessus, OpenVAS, Metasploit</li>
            <li>Delivered ISSP and hardening plan aligned with NIST standards</li>
          </ul>
          <p className="font-bold mt-4">Web Developer & Analyst – Top-Down Analytics (May 2022–June 2023)</p>
          <ul className="list-disc list-inside">
            <li>Enhanced web app security and authentication</li>
            <li>Improved dashboards and reporting pipelines</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li><strong>Azure Mini SOC:</strong> Built real-time detection setup with Sentinel and Logic Apps</li>
            <li><strong>Zero Trust VPN:</strong> Deployed MFA WireGuard VPN on AWS</li>
            <li><strong>Offensive Security Lab:</strong> Hacking simulations with Metasploitable</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="font-bold">M.S. Cybersecurity Engineering – University of San Diego (May 2025)</p>
          <p>GPA: 4.0</p>
          <p className="font-bold mt-2">B.S. Computer Science – Cal Lutheran University (May 2023)</p>
          <p>GPA: 3.7 | Magna Cum Laude</p>
        </CardContent>
      </Card>

      <footer className="text-center text-sm text-gray-500 pt-6">
        &copy; 2025 Jacob Cudiamat. All rights reserved.
      </footer>
    </div>
  );
}
