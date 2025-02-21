"use client"
import {
  BarChart,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  HelpCircle,
  LayoutDashboard,
  MessageCircle,
  Search,
  Settings,
  Users,
  Video,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import img1 from '../../../public/assets/img3.jpg'

const meetings = [
  {
    title: "Meeting with Arthur Bell",
    time: "09:00 - 10:30 AM (UTC)",
    platform: "On Google Meet",
    attendees: 3,
  },
  {
    title: "Meeting with Leslie Perez",
    time: "11:00 - 12:00 PM (UTC)",
    platform: "On Google Meet",
    attendees: 2,
  },
]

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const currentMonth = "October 2024"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">O</span>
          </div>
          <span className="font-semibold">Ovalent</span>
        </div>

        <nav className="space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" isActive />
          <NavItem icon={Calendar} label="Schedule" />
          <NavItem icon={FileText} label="Projects" />
          <NavItem icon={BarChart} label="Reports" />
          <NavItem icon={MessageCircle} label="Notes" />
          <NavItem icon={Users} label="Benefits" badge="NEW" />
          <NavItem icon={Users} label="Job" />
          <NavItem icon={Users} label="Candidate" />
          <NavItem icon={Users} label="Company" />
          <NavItem icon={Clock} label="Payment" />
        </nav>

        <div className="mt-auto pt-8 space-y-1">
          <NavItem icon={HelpCircle} label="Help Center" />
          <NavItem icon={MessageCircle} label="Feedback" />
          <NavItem icon={Settings} label="Settings" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-lg text-sm w-64" />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">Export</button>
            <Image
              src={img1}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Employee" number="218" change="+8%" period="vs last month" />
          <StatCard title="New Employee" number="48" change="+16%" period="vs last month" />
          <StatCard title="Resigned Employee" number="16" change="+12%" period="vs last month" />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-semibold mb-1">KPI Performance</h2>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold">91.72%</span>
                  <span className="text-green-500 text-sm">+24% vs last month</span>
                </div>
              </div>
              <select className="px-3 py-1.5 border rounded-lg text-sm">
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-48 bg-purple-50 rounded-lg"></div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-semibold mb-1">Total Time Worked</h2>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold">12hr 32min</span>
                  <span className="text-green-500 text-sm">+12% vs last month</span>
                </div>
              </div>
              <select className="px-3 py-1.5 border rounded-lg text-sm">
                <option>Weekly View</option>
              </select>
            </div>
            <div className="h-48 bg-gray-50 rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">Employment Status</h2>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Permanent</span>
                  <span className="font-semibold">324</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Contract</span>
                  <span className="font-semibold">121</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Probation</span>
                  <span className="font-semibold">72</span>
                </div>
              </div>
            </div>
            <div className="h-12 flex gap-1">
              <div className="w-1/2 bg-purple-500 rounded-l-lg"></div>
              <div className="w-1/3 bg-green-500"></div>
              <div className="w-1/6 bg-red-500 rounded-r-lg"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">Schedule</h2>
              <button className="text-sm text-blue-600">See All</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft size={20} />
              </button>
              <span className="font-medium">{currentMonth}</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-6">
              {days.map((day) => (
                <div key={day} className="text-center text-sm text-gray-500 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => (
                <button
                  key={i}
                  className={`text-sm p-2 rounded-lg ${i === 8 ? "bg-purple-100 text-purple-600" : "hover:bg-gray-50"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {meetings.map((meeting, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-1">{meeting.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{meeting.time}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Video size={16} />
                      {meeting.platform}
                    </div>
                    <div className="flex -space-x-2">
                      {Array.from({ length: meeting.attendees }).map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({
  icon: Icon,
  label,
  isActive,
  badge,
}: {
  icon: any
  label: string
  isActive?: boolean
  badge?: string
}) {
  return (
    <Link
      href="#"
      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
        isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} />
        <span>{label}</span>
      </div>
      {badge && <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">{badge}</span>}
    </Link>
  )
}

function StatCard({
  title,
  number,
  change,
  period,
}: {
  title: string
  number: string
  change: string
  period: string
}) {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="text-gray-500 mb-2">{title}</h3>
      <div className="text-2xl font-semibold mb-2">{number}</div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">{change}</span>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
    </div>
  )
}

