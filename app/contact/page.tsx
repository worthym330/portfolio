'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { FadeIn, SlideIn, ScaleIn } from '@/components/animations';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container py-12 md:py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
      </FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <SlideIn direction="left">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" required className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </SlideIn>
        
        <SlideIn direction="right">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <ScaleIn delay={0.1}>
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">your.email@example.com</p>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
              
              <ScaleIn delay={0.2}>
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
              
              <ScaleIn delay={0.3}>
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}