"use client"

import { Hero } from "@/components/hero"
import { Showcase } from "@/components/showcase"
import { Services } from "@/components/services"
import { WorkflowBenefits } from "@/components/workflow-benefits"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Loader } from "@/components/loader"
import { Marquee } from "@/components/marquee"

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <Loader />
      <Hero />
      <Showcase />
      <Marquee />
      <WorkflowBenefits />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
