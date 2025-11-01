import {
  Activity,
  Heart,
  Zap,
 } from 'lucide-react'
import type { ServiceCardProps } from '../blocks/cards/types'
import img1 from "@/assets/bg-home-hero.webp"

export const services: ServiceCardProps[] = [
  {
    id: "adjustments",
    icon: Activity,
    title: "Spinal Adjustments",
    description: "Precise manual adjustments to restore proper spinal alignment and reduce pain using gentle, effective techniques.",
    popular: true,
    duration: "30 min",
    features: ["Manual therapy", "Gentle techniques", "Immediate relief"],
    color: "blue",
    price: "$95",
    image: img1
  },
  {
    id: "soul",
    icon: Heart,
    title: "Soul Alignment",
    description: "Specialized care for athletes and active individuals to recover faster and prevent future injuries.",
    popular: false,
    duration: "40 min",
    features: ["Performance optimization", "Injury prevention", "Recovery planning"],
    color: "red",
    price: "$50",
    image: img1
  },
  {
    id: "naet",
    icon: Zap,
    title: "NAET",
    description: "Comprehensive rehabilitation programs designed to strengthen muscles and restore full function.",
    popular: false,
    duration: "40 min",
    features: ["Exercise programs", "Strength training", "Mobility work"],
    color: "purple",
    price: "$50",
    image: img1
  },
]