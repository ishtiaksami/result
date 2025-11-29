"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import "./globals.css"

import {
  User,
  BookOpen,
  CreditCard,
  FileText,
  GraduationCap,
  Calendar,
  Users,
  Award,
  Car,
  Laptop,
  MessageSquare,
  LogOut,
  X,
} from "lucide-react"

export default function DaffodilUniversityPortal() {
  const [selectedSemester, setSelectedSemester] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const menuItems = [
    { icon: BookOpen, label: "Dashboard", link: "https://studentportal.diu.edu.bd/dashboard" },
    { icon: User, label: "Student Profile", link: "https://studentportal.diu.edu.bd/student-profile" },
    { icon: CreditCard, label: "Payment Ledger", link: "https://studentportal.diu.edu.bd/payment-ledger" },
    { icon: FileText, label: "Registration/Exam Clearance", link: "https://studentportal.diu.edu.bd/payment-ledger" },
    { icon: GraduationCap, label: "Registered Course", link: "https://studentportal.diu.edu.bd/registered-courses" },
    { icon: Award, label: "Result", active: true, link: "https://studentportaldiu.vercel.app" },
    { icon: Calendar, label: "Routine", link: "https://studentportal.diu.edu.bd/routine" },
    { icon: FileText, label: "Live Result", link: "https://studentportal.diu.edu.bd/live-result" },
    { icon: Users, label: "Teaching Evaluation", link: "https://studentportal.diu.edu.bd/teaching-evaluation" },
    { icon: GraduationCap, label: "Convocation Apply", link: "https://studentportal.diu.edu.bd/convocation-apply" },
    { icon: FileText, label: "Certificate & Transcript", link: "https://studentportal.diu.edu.bd/certificate-transcript" },
    { icon: Laptop, label: "Laptop", link: "https://studentportal.diu.edu.bd/laptop" },
    { icon: MessageSquare, label: "Mentor Meeting", link: "https://studentportal.diu.edu.bd/mentor-meeting" },
    { icon: Car, label: "Transport Card Apply", link: "https://studentportal.diu.edu.bd/transport-card-apply" },
    { icon: User, label: "Student Application", link: "https://studentportal.diu.edu.bd/student-application" },
    { icon: LogOut, label: "Logout", link: "https://studentportal.diu.edu.bd/logout" },
  ]

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 w-64 bg-slate-800 text-white flex flex-col transform transition-transform duration-300 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <img src="/diulogo.png" alt="DIU Logo" />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-4 bg-[#23272B] overflow-y-auto">
          {menuItems.map((item, index) => {
            const content = (
              <div
                className={`flex items-center gap-3 px-4 py-3 text-sm cursor-pointer transition-colors ${
                  item.active
                    ? "bg-slate-700 text-white border-r-2 border-blue-400"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            )
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsSidebarOpen(false)}
              >
                {content}
              </a>
            )
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-64 md:ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            {/* Toggle menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <img src="/line_img.png" alt="menu" className="w-6 h-6" />}
            </Button>
          </div>
          <div>
            <p className="font-semibold text-[#182444]">Tabassum Tasnim</p>
            <p className="text-sm text-gray-600">252-35-376</p>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="space-y-6">
           
            {/* Result Block */}
            
              <div className="">
                <div className="hidden md:block">
                  <img src="/desktop-a.png" alt="" />
                </div>
                <div className="md:hidden block">
                  <img src="/phone-a.png" alt="" />
                </div>
              </div>
            
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4 flex-shrink-0">
          <p className="text-center text-sm text-gray-600">
            2025 © - Developed by{" "}
            <span>Daffodil International University</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
