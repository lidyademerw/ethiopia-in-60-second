"use client";

import { useState } from "react";
import { Mail, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EthiopianFlag } from "@/components/ethiopian-flag";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="border-t-4 border-ethiopia-green bg-card px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <EthiopianFlag className="h-8 w-12" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Contact Us / አግኙን
            </h2>
          </div>
          <p className="text-muted-foreground">
            Get in touch with us for any questions or feedback
          </p>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="rounded-lg border border-ethiopia-green/30 bg-ethiopia-green/10 p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ethiopia-green">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-ethiopia-green">
              Message Sent! / መልዕክት ተልኳል!
            </h3>
            <p className="text-muted-foreground">
              Thank you for contacting us. We will get back to you soon.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-ethiopia-green hover:bg-ethiopia-green/90"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name / ስም
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border focus:border-ethiopia-green focus:ring-ethiopia-green"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email / ኢሜይል
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border focus:border-ethiopia-green focus:ring-ethiopia-green"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message / መልዕክት
              </Label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="border-border focus:border-ethiopia-green focus:ring-ethiopia-green"
              />
            </div>
            <div className="flex justify-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="gap-2 bg-ethiopia-green px-8 text-white hover:bg-ethiopia-green/90"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit / ላክ
                  </>
                )}
              </Button>
            </div>
          </form>
        )}

        {/* Contact Info & Social */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Email */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-ethiopia-red" />
              <a href="mailto:ethiopia60sec@gmail.com" className="hover:text-foreground">
                ethiopia60sec@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="rounded-full bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-ethiopia-green hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-ethiopia-yellow hover:text-foreground" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-ethiopia-red hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-ethiopia-red hover:text-white" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Flag stripe */}
            <div className="flex h-1.5 w-32 overflow-hidden rounded-full">
              <div className="flex-1 bg-ethiopia-green" />
              <div className="flex-1 bg-ethiopia-yellow" />
              <div className="flex-1 bg-ethiopia-red" />
            </div>

            <p className="text-sm text-muted-foreground">
              Ethiopia in 60 Seconds / ኢትዮጵያ በ60 ሰከንድ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
