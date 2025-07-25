"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Database,
  Lock,
  Cpu,
  Globe,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

// Componente Ensō personalizado
const EnsoLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C40 80 32 72 32 62"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
  </svg>
)

// Componente para efectos de agua acuarela
const WaterEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.1), transparent 40%)`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 50%)`,
          filter: "blur(1px)",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.05), transparent 60%)`,
          filter: "blur(2px)",
        }}
      />
    </>
  )
}

export default function ITConsultingLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 relative overflow-hidden">
      <WaterEffect />
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50 relative">
        <Link className="flex items-center justify-center" href="#">
          <EnsoLogo className="h-8 w-8 text-red-400" />
          <span className="ml-2 text-xl font-bold text-white">Kaizen</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit border-red-400 text-red-400">
                    改善 • Continuous Improvement
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Transform your Business with Kaizen philosophy
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Embrace continuous improvement in your IT infrastructure. Our expert consulting services blend
                    Japanese precision with cutting-edge technology to drive sustainable growth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    Get free consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    View our services
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Certified experts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Proven results</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="IT Consulting team"
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                  height="400"
                  src="/bg-1.webp?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-red-400 text-red-400">
                  Our expertise
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Comprehensive IT Consulting Services
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From strategy to implementation, we provide end-to-end IT solutions with the precision and dedication
                  of Kaizen methodology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="group hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800 border-gray-700">
                <CardHeader>
                  <Cloud className="h-12 w-12 text-red-400 mb-2" />
                  <CardTitle className="text-white">Cloud migration & strategy</CardTitle>
                  <CardDescription className="text-gray-300">
                    Seamlessly migrate to the cloud with our proven methodologies and strategic planning.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      AWS, Azure, GCP expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Cost optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Security compliance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800 border-gray-700">
                <CardHeader>
                  <Shield className="h-12 w-12 text-red-400 mb-2" />
                  <CardTitle className="text-white">Cybersecurity Solutions</CardTitle>
                  <CardDescription className="text-gray-300">
                    Protect your business with comprehensive security assessments and implementations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Security audits
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Threat monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Compliance management
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800 border-gray-700">
                <CardHeader>
                  <Zap className="h-12 w-12 text-red-400 mb-2" />
                  <CardTitle className="text-white">Digital Transformation</CardTitle>
                  <CardDescription className="text-gray-300">
                    Modernize your operations with cutting-edge technology and process optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Process automation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Legacy system upgrades
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Digital workflows
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800 border-gray-700">
                <CardHeader>
                  <Database className="h-12 w-12 text-red-400 mb-2" />
                  <CardTitle className="text-white">Data Management</CardTitle>
                  <CardDescription className="text-gray-300">
                    Optimize your data infrastructure for better insights and decision-making.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Data analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Database optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Business intelligence
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800 border-gray-700">
                <CardHeader>
                  <Cpu className="h-12 w-12 text-red-400 mb-2" />
                  <CardTitle className="text-white">Infrastructure Management</CardTitle>
                  <CardDescription className="text-gray-300">
                    Ensure optimal performance with proactive infrastructure monitoring and management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      24/7 monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Performance optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Disaster recovery
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800 border-gray-700">
                <CardHeader>
                  <Users className="h-12 w-12 text-red-400 mb-2" />
                  <CardTitle className="text-white">IT Strategy & Planning</CardTitle>
                  <CardDescription className="text-gray-300">
                    Align your technology roadmap with business objectives for maximum ROI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Technology roadmaps
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Budget planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Risk assessment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="border-red-400 text-red-400">
                    Why Choose Kaizen
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Your trusted technology partner
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With the philosophy of continuous improvement and a team of certified experts, we deliver results
                    that drive your business forward with Japanese precision.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Proven track record</h3>
                      <p className="text-sm text-gray-400">100+ successful projects across various industries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Security First</h3>
                      <p className="text-sm text-gray-400">Enterprise-grade security in every solution we deliver</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Global Reach</h3>
                      <p className="text-sm text-gray-400">Supporting clients across 25+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Team collaboration"
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                  height="400"
                  src="/placeholder.svg?height=400&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-red-400">100+</div>
                <div className="text-sm text-gray-400">Projects completed</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-red-400">15+</div>
                <div className="text-sm text-gray-400">Years experience</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-red-400">98%</div>
                <div className="text-sm text-gray-400">Client satisfaction</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-400">Support available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-900 via-red-800 to-gray-900 relative z-10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to embrace continuous improvement?
                </h2>
                <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get a free consultation and discover how Kaizen methodology can transform your technology
                  infrastructure for sustainable growth.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Button type="submit" className="bg-white text-red-900 hover:bg-gray-100">
                    Get started
                  </Button>
                </form>
                <p className="text-xs text-gray-300">Free consultation • No commitment required</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-200">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+54 (911) 2500-0667</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">max@get-kaizen.click</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900 relative z-10">
        <p className="text-xs text-gray-400">© 2025 Kaizen IT Consulting. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-red-400" href="#">
            Privacy policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-red-400" href="#">
            Terms of service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-red-400" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
