"use client"

import { useState } from "react"
import {
  BarChart3,
  ChevronDown,
  ClipboardList,
  FileText,
  Filter,
  HelpCircle,
  LayoutDashboard,
  Package,
  PieChart,
  Settings,
  ShoppingCart,
  Wallet,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for charts and tables
const paymentVouchers = [
  { id: "01", subject: "Request for FAD for October 2023", date: "24/10/2023", status: "Pending" },
  { id: "02", subject: "Request for project proposal fee", date: "19/10/2023", status: "Approved" },
  { id: "03", subject: "Request for FAD for October 2023", date: "17/10/2023", status: "Approved" },
  { id: "04", subject: "Request for project proposal fee", date: "03/10/2023", status: "Pending" },
]

export default function Dashboard() {
  const [currentDate] = useState("Today is Monday, 17th November 2023")

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">O</span>
          </div>
          <span className="font-semibold text-violet-600">Orlando</span>
        </div>

        <nav className="space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" isActive />
          <NavItem icon={FileText} label="Payment voucher" />
          <NavItem icon={Wallet} label="Payroll" />
          <NavItem icon={ClipboardList} label="Orders" />
          <NavItem icon={Settings} label="Maintenance" />
          <NavItem icon={Package} label="Logistics" />
          <NavItem icon={FileText} label="Office budget" />
          <NavItem icon={ShoppingCart} label="Stock and inventory" />
          <NavItem icon={HelpCircle} label="Notifications" />
          <NavItem icon={PieChart} label="Capacity building" />
          <NavItem icon={BarChart3} label="Procurements" />
        </nav>

        <div className="mt-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-white">S</div>
              <span>Sales Team</span>
            </div>
            <ChevronDown size={16} />
          </div>
          <button className="mt-4 text-sm text-violet-600 font-medium">Upgrade plan</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Welcome Meaghan Loweest!</h1>
            <p className="text-gray-500 text-sm">{currentDate}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg text-sm" />
              <select className="px-4 py-2 border rounded-lg text-sm">
                <option>Oct 10</option>
              </select>
              <select className="px-4 py-2 border rounded-lg text-sm">
                <option>Monthly</option>
              </select>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm">
              <Filter size={16} />
              Filter
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm">Export</button>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard number="250" label="Total number of staff" change="+22% from last quarter" color="green" />
          <StatCard number="200" label="Total applications" change="+12% from last quarter" color="red" />
          <StatCard number="38" label="Total projects" change="+8% from last quarter" color="violet" />
          <StatCard number="8" label="Total departments" label2="Without changes" color="blue" />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-semibold">Staff applications card</h2>
              <HelpCircle size={16} className="text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center text-gray-400">Donut Chart Placeholder</div>
            <div className="flex justify-around mt-4">
              <div className="text-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <span className="text-sm">Pending</span>
                </div>
                <div className="font-semibold mt-1">100</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Approved</span>
                </div>
                <div className="font-semibold mt-1">60</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Rejected</span>
                </div>
                <div className="font-semibold mt-1">40</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-semibold">Annual payroll summary</h2>
              <HelpCircle size={16} className="text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center text-gray-400">Bar Chart Placeholder</div>
          </div>
        </div>

        {/* Payment Vouchers Table */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold">Payment vouchers</h2>
            <HelpCircle size={16} className="text-gray-400" />
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="text-left font-medium pb-4">S/N</th>
                <th className="text-left font-medium pb-4">Subject</th>
                <th className="text-left font-medium pb-4">Date</th>
                <th className="text-left font-medium pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentVouchers.map((voucher) => (
                <tr key={voucher.id} className="border-t">
                  <td className="py-4 text-sm">{voucher.id}</td>
                  <td className="py-4">{voucher.subject}</td>
                  <td className="py-4 text-sm">{voucher.date}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        voucher.status === "Approved" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {voucher.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function NavItem({
  icon: Icon,
  label,
  isActive,
}: {
  icon: any
  label: string
  isActive?: boolean
}) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
        isActive ? "bg-violet-50 text-violet-600" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  )
}

function StatCard({
  number,
  label,
  label2,
  change,
  color,
}: {
  number: string
  label: string
  label2?: string
  change?: string
  color: "green" | "red" | "violet" | "blue"
}) {
  const colors = {
    green: "text-green-500",
    red: "text-red-500",
    violet: "text-violet-500",
    blue: "text-blue-500",
  }

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="text-2xl font-semibold mb-1">{number}</div>
      <div className="text-sm text-gray-500 mb-2">{label}</div>
      {change && <div className={`text-sm ${colors[color]}`}>{change}</div>}
      {label2 && <div className="text-sm text-gray-400">{label2}</div>}
    </div>
  )
}

