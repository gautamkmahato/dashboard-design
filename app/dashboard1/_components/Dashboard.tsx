"use client";

import { useState } from "react";
import {
  ArrowDownNarrowWide,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  ChevronRight,
  FileText,
  FolderKanban,
  FolderUp,
  HelpCircle,
  LayoutDashboard,
  LineChart,
  ListFilter,
  MoreHorizontal,
  PieChart,
  Plus,
  Search,
  Share2,
  ShieldCheck,
  TableOfContents,
  Tally4,
  UserPen,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "../mypage.module.css";
import img1 from '../../../public/assets/img3.jpg'
import img2 from '../../../public/assets/img5.jpg'
import img3 from '../../../public/assets/img2.jpg'
import img7 from '../../../public/assets/img7.png'
import img6 from '../../../public/assets/img6.png'
import BudgetDashboard from "./Chart";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const deals = [
    {
      id: "01",
      company: "Acme",
      contact: "Tyra Dhillon",
      email: "tyradhillon@acme.com",
      value: "$3,912",
      source: "Social Networks",
      image: img1
    },
    {
      id: "02",
      company: "Academic Project",
      contact: "Bistri Lando",
      email: "lando@academicproject.com",
      value: "$2,345",
      source: "Outreach",
      image: img2
    },
    {
      id: "03",
      company: "Almibus",
      contact: "Kevin Chen",
      email: "chen@almibus.com",
      value: "$13,864",
      source: "Referrals",
      image: img3
    },
    {
      id: "04",
      company: "Big Bang Production",
      contact: "Josh Ryan",
      email: "joshryan@gmail.com",
      value: "$6,314",
      source: "Word-of-mouth",
      image: img1
    },
    {
      id: "05",
      company: "Book Launch",
      contact: "Chieko Chute",
      email: "chieko67@booklaunch.com",
      value: "$5,982",
      source: "Outreach",
      image: img3
    },
  ];

  return (
    <div className={styles.mypage}>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div
          className={`${
            isCollapsed ? "w-20" : "w-64"
          } bg-white border-r transition-all duration-300 p-4 flex flex-col`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Image
              src={img7}
              alt="Logo"
              width={32}
              height={32}
              className="rounded"
            />
            {!isCollapsed && <span className="font-semibold">Prody</span>}
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={isCollapsed ? "" : "Search..."}
              className={`w-full pl-9 pr-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isCollapsed ? "hidden" : ""
              }`}
            />
          </div>

          <nav className="flex-1">
            <NavItem
              icon={LayoutDashboard}
              label="Dashboard"
              isCollapsed={isCollapsed}
              isActive
            />
            <NavItem
              icon={FileText}
              label="Projects"
              isCollapsed={isCollapsed}
              badge="3/5"
            />
            <NavItem
              icon={LineChart}
              label="Analytics"
              isCollapsed={isCollapsed}
            />
            <NavItem
              icon={BarChart3}
              label="Reports"
              isCollapsed={isCollapsed}
              badge="New"
            />
            <NavItem icon={Plus} label="Extensions" isCollapsed={isCollapsed} />
            <NavItem
              icon={PieChart}
              label="Companies"
              isCollapsed={isCollapsed}
              badge="17"
            />
            <NavItem
              icon={Users2}
              label="People"
              isCollapsed={isCollapsed}
              badge="184"
            />
          </nav>

          <div className="border-t pt-4">
            <NavItem
              icon={HelpCircle}
              label="Help center"
              isCollapsed={isCollapsed}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  {isCollapsed ? (
                    <ArrowRight size={20} />
                  ) : (
                    <ArrowLeft size={20} />
                  )}
                </button>
                <div className="flex items-center gap-2">
                  <FolderKanban size={16} className="text-gray-400" />
                  <span className="text-gray-400">Projects</span>
                  <ChevronRight size={16} className="text-gray-400 mr-2" />
                  <FolderKanban size={16} className="text-gray-400" />
                  <span className="text-gray-400">Construction</span>
                  <ChevronRight size={16} className="text-gray-400 mr-2" />
                  <span>House Spectrum Ltd</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <TableOfContents size={16} />
                  Manage
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Share2 size={16} />
                  Share
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          </header>

          <main className="p-6">
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* <Home className="w-6 h-6 text-gray-600" /> */}
                    <Image
              src={img6}
              alt="Logo"
              width={60}
              height={60}
              className="rounded"
            />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold">
                      House Spectrum Ltd
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1 border text-[13px] border-[#c4a484] bg-yellow-100 px-2 py-1 rounded-full">
                        <ShieldCheck size={14} className="text-gray-400" />
                        Certified
                      </span>
                      <span className="flex items-center gap-1 border border-[#c4a484] text-[13px] px-2 py-1 rounded-full">
                        <UserPen size={14} className="text-gray-400" />
                        Jessica Parker
                      </span>

                      <span>Edited 7 hrs ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <MetricCard
                    label="Sales"
                    value="5.3"
                    unit="1M"
                    color="blue"
                  />
                  <MetricCard
                    label="Profit"
                    value="2.4"
                    unit="1M"
                    color="green"
                  />
                  <MetricCard
                    label="Customer"
                    value="78"
                    unit="%"
                    color="purple"
                  />
                </div>
              </div>

              {/* Chart would go here */}
              <div className="h-64 bg-gray-50 rounded-lg mb-6">
                <BudgetDashboard />
              </div>

              {/* Deals Table */}
              <div className="mt-6">
                <div className="flex items-center border-b py-4 justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Tally4 size={18} className="text-gray-400 mr-[-2px]" />
                    <span className="font-medium">All deals</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mr-2">
                      <ListFilter size={16} />
                      Filter
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mr-2">
                      <ArrowDownNarrowWide size={16} />
                      Sort
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mr-2">
                      <Search size={16} />
                      Search
                    </button>
                    <button className="flex items-center text-sm gap-2 border px-3 py-1.5 bg-gray-100 rounded-md text-gray-600 hover:text-gray-900 mr-2">
                      <FolderUp size={16} />
                      Export
                    </button>
                    <button className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                      + Add New
                    </button>
                  </div>
                </div>

                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500">
                      <th className="pb-3 px-2 font-medium">
                        <input type="checkbox" className="pb-3 font-medium" />
                      </th>
                      <th className="pb-3 px-2 font-medium">Id</th>
                      <th className="pb-3 font-medium">Deals</th>
                      <th className="pb-3 font-medium">Contact</th>
                      <th className="pb-3 font-medium">Email</th>
                      <th className="pb-3 font-medium">Value</th>
                      <th className="pb-3 font-medium">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.map((deal) => (
                      <tr key={deal.id} className="border-t">
                        <td className="py-3 px-2 text-sm text-gray-500">
                          <input type="checkbox" className="pb-3 font-medium" />
                        </td>
                        <td className="py-3 text-sm px-2 text-gray-500">
                          {deal.id}
                        </td>
                        <td className="py-3">{deal.company}</td>
                        <td className="py-3">
                        <div className="flex items-center gap-2">
  <div className="w-6 h-6 bg-gray-100 rounded-full overflow-hidden">
    <Image 
      src={deal?.image} 
      width={24} 
      height={24} 
      alt="image" 
      className="object-cover w-full h-full"
    />
  </div>
  {deal.contact}
</div>

                        </td>
                        <td className="py-3 text-sm text-gray-500">
                          {deal.email}
                        </td>
                        <td className="py-3 font-medium">{deal.value}</td>
                        <td className="py-3">
                          <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                            {deal.source}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  isCollapsed,
  isActive,
  badge,
}: {
  icon: any;
  label: string;
  isCollapsed: boolean;
  isActive?: boolean;
  badge?: string;
}) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-md mb-1 group ${
        isActive
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon size={20} />
      {!isCollapsed && (
        <div className="flex items-center justify-between flex-1">
          <span>{label}</span>
          {badge && (
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

function MetricCard({
  label,
  value,
  unit,
  color,
}: {
  label: string;
  value: string;
  unit: string;
  color: "blue" | "green" | "purple";
}) {
  const colors = {
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  };

  return (
<div className="text-center">
  <div className="text-sm text-gray-500 mb-1 flex items-center gap-1 justify-center">
    <span
      className={`w-2 h-2 rounded-full ${
        label === "Sales" ? "bg-blue-500" : label === "Profit" ? "bg-green-500" : "bg-purple-500"
      }`}
    ></span>
    {label}
  </div>
  <div className="flex items-baseline gap-1">
    <span className={`text-[18px] font-semibold ${colors[color]}`}>
      {value}
    </span>
    <span className="text-sm text-gray-400"> / {unit}</span>
  </div>
</div>


  );
}
