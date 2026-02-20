"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      variant: "success",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-slate-50 via-primary/5 to-accent/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question or ready to book? We&apos;d love to hear from you.
              Reach out and our friendly team will get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content: two columns */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-slate-800 mb-8">
                Visit Our Clinic
              </h2>

              <div className="space-y-6 mb-10">
                <Card className="border-slate-100">
                  <CardContent className="flex gap-4 p-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        21 Falcon St, Crows Nest<br />
                        NSW 2065, Australia
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-100">
                  <CardContent className="flex gap-4 p-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                      <a href="tel:0289647951" className="text-primary hover:underline">
                        02 8964 7951
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-100">
                  <CardContent className="flex gap-4 p-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                      <a href="mailto:info@cryospaclinics.com" className="text-primary hover:underline">
                        info@cryospaclinics.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-50 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="size-5 text-primary" />
                    <h3 className="font-semibold text-slate-800">Opening Hours</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-slate-800 font-medium">9am – 1pm / 4pm – 8:30pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-slate-800 font-medium">8am – 6pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-slate-800 font-medium">8am – 3pm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-10 aspect-video rounded-2xl overflow-hidden bg-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5!2d151.2!3d-33.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ5JzQ4LjAiUyAxNTHCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cryospa Clinics Location"
                />
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-50 border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                    Send Us a Message
                  </h2>

                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="size-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="size-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setStatus("idle")}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="04XX XXX XXX"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => setFormData({ ...formData, subject: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="booking">Booking Enquiry</SelectItem>
                              <SelectItem value="services">Services Question</SelectItem>
                              <SelectItem value="pricing">Pricing Information</SelectItem>
                              <SelectItem value="corporate">Corporate Enquiry</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you?"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full"
                        size="lg"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
