import {
  Bell,
  BookOpen,
  CalendarCheck,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  FileBarChart,
  FileCheck,
  FilePlus,
  FileQuestion,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Presentation,
  Receipt,
  School,
  Settings,
  Shield,
  ShieldCheck,
  TrendingUp,
  UserCog,
  UserRound,
  Users,
  UsersRound,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href?: string;
  icon?: LucideIcon;
  badge?: string;
  badgeVariant?: "default" | "green";
  children?: NavItem[];
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    title: "Main",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "Students", href: "/students", icon: Users },
      { title: "Teachers", href: "/teachers", icon: UserRound },
      { title: "Parents", href: "/parents", icon: HeartHandshake },
      { title: "Classes", href: "/classes", icon: School },
    ],
  },
  {
    title: "Academics",
    items: [
      { title: "Subjects", href: "/subjects", icon: BookOpen },
      { title: "Attendance", href: "/attendance", icon: ClipboardCheck },
      { title: "Performance", href: "/performance", icon: TrendingUp },
      { title: "Exams & Results", href: "/exams-results", icon: FileCheck },
      { title: "Assignments", href: "/assignments", icon: FileText },
      { title: "Quizzes", href: "/quizzes", icon: FileQuestion },
      { title: "Timetable", href: "/timetable", icon: CalendarClock },
    ],
  },
  {
    title: "Finance",
    items: [
      { title: "Fees", href: "/fees", icon: Wallet },
      { title: "Fee Collection", href: "/fee-collection", icon: HandCoins },
      { title: "Fee Automation", href: "/fee-automation", icon: Zap },
      { title: "Payment Records", href: "/payment-records", icon: Receipt },
    ],
  },
  {
    title: "Admissions",
    items: [
      { title: "Online Admissions", href: "/admissions", icon: FilePlus },
      { title: "Admission Applications", href: "/admission-applications", icon: ClipboardList },
    ],
  },
  {
    title: "Communication",
    items: [
      { title: "Announcements", href: "/announcements", icon: Megaphone },
      { title: "Notifications", href: "/notifications", icon: Bell },
      { title: "Messages", href: "/messages", icon: MessageSquare },
    ],
  },
  {
    title: "Reports",
    items: [
      { title: "Student Reports", href: "/student-reports", icon: FileBarChart },
      { title: "Attendance Reports", href: "/attendance-reports", icon: CalendarCheck },
      { title: "Academic Reports", href: "/academic-reports", icon: GraduationCap },
      { title: "Financial Reports", href: "/financial-reports", icon: FileSpreadsheet },
    ],
  },
  {
    title: "System",
    items: [
      { title: "User Roles", href: "/user-roles", icon: ShieldCheck },
      { title: "Security & Data Protection", href: "/security", icon: Shield },
      { title: "Settings", href: "/settings", icon: Settings },
    ],
  },
  {
    title: "Apps",
    items: [
      { title: "Principal / Admin", href: "/apps/admin", icon: UserCog },
      { title: "Teacher App", href: "/apps/teacher", icon: Presentation },
      { title: "Parent App", href: "/apps/parent", icon: UsersRound },
      { title: "Student App", href: "/apps/student", icon: GraduationCap },
    ],
  },
];