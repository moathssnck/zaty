import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Zap, Shield, Globe, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommunicationsLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">CommLink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    🚀 New: AI-Powered Messaging
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect. Communicate. Collaborate.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transform your business communications with our unified
                    platform. Seamless messaging, video calls, and team
                    collaboration tools designed for the modern workplace.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="h-12 px-8">
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 bg-white text-black"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9/5</span>
                  </div>
                  <span>•</span>
                  <span>10,000+ companies trust us</span>
                  <span>•</span>
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Communications Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need to communicate better
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive communication suite brings together all the
                  tools your team needs to stay connected and productive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-primary" />
                  <CardTitle>Instant Messaging</CardTitle>
                  <CardDescription>
                    Real-time messaging with rich media support, file sharing,
                    and message history.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Group chats and direct messages</li>
                    <li>• File and media sharing</li>
                    <li>• Message search and history</li>
                    <li>• Custom emoji and reactions</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary" />
                  <CardTitle>Video Conferencing</CardTitle>
                  <CardDescription>
                    HD video calls with screen sharing, recording, and up to
                    1000 participants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• HD video and crystal-clear audio</li>
                    <li>• Screen sharing and recording</li>
                    <li>• Virtual backgrounds</li>
                    <li>• Meeting scheduling</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary" />
                  <CardTitle>Smart Automation</CardTitle>
                  <CardDescription>
                    AI-powered features to streamline workflows and boost
                    productivity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Smart message suggestions</li>
                    <li>• Automated meeting summaries</li>
                    <li>• Priority message filtering</li>
                    <li>• Custom workflows</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline">Trusted Worldwide</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Join thousands of teams already communicating better
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    From startups to Fortune 500 companies, teams around the
                    world rely on our platform to stay connected and productive.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="text-sm text-muted-foreground">
                      Active Companies
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">1M+</div>
                    <div className="text-sm text-muted-foreground">
                      Messages Daily
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm text-muted-foreground">
                      Countries
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Global Communications"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2 p-6 bg-muted rounded-lg">
                    <Shield className="h-8 w-8 text-primary" />
                    <div className="text-sm font-medium">
                      End-to-End Encryption
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-6 bg-muted rounded-lg">
                    <Globe className="h-8 w-8 text-primary" />
                    <div className="text-sm font-medium">
                      Global Infrastructure
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-6 bg-muted rounded-lg">
                    <Zap className="h-8 w-8 text-primary" />
                    <div className="text-sm font-medium">99.9% Uptime</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-6 bg-muted rounded-lg">
                    <Users className="h-8 w-8 text-primary" />
                    <div className="text-sm font-medium">24/7 Support</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline">Security & Reliability</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Enterprise-grade security you can trust
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Your communications are protected with military-grade
                    encryption, compliance certifications, and a global
                    infrastructure built for reliability.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" className="bg-white text-black">
                    Security Whitepaper
                  </Button>
                  <Button variant="outline" className="bg-white text-black">
                    Compliance Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform your communications?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of teams who have already upgraded their
                  communication experience. Start your free trial today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-black"
                    placeholder="Enter your work email"
                    type="email"
                  />
                  <Button type="submit" variant="secondary">
                    Start Free Trial
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/60">
                  14-day free trial. No credit card required.{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 CommLink. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}