"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, CheckIcon, DownloadIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Home() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const downloadURL = "https://tracking-sheet.vercel.app/tracking-sheet.xlsx";
  const menuBar = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Contact",
      href: "mailto:selamawi.gd@gmail.com",
    },
  ];
  return (
    <div id="home" className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 bg-primary text-primary-foreground py-4 md:py-6">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Activity className="h-6 w-6" />
            <span className="text-lg font-semibold">Tracking Sheet</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            {menuBar.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                {menu.label}
              </Link>
            ))}
          </nav>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="default" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex space-y-2 flex-col font-medium mt-4">
                  {menuBar.map((menu, index) => (
                    <Link
                      key={index}
                      href={menu.href}
                      className="font-medium hover:underline underline-offset-4"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {menu.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </header>
      <div className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16))]">
        <header className="bg-primary text-primary-foreground py-6 md:py-12">
          <div className="container flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Program Completion Tracking Sheet
            </h1>
            <p className="max-w-[600px] text-slate-400 md:text-xl">
              Stay on top of your program progress with this comprehensive Excel
              workbook. Track individual and team milestones, manage tasks, and
              generate reports.
            </p>
            <Link
              target="_blank"
              href={downloadURL}
              className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download Now
            </Link>
          </div>
        </header>
        <main className="flex-1">
          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Features
                  </div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Stay on Top of Your Program Progress
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Track individual and team milestones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Manage tasks and deadlines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Generate progress reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Customize the workbook to fit your needs</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Benefits
                  </div>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    The Program Completion Tracking Sheet helps you stay
                    organized, monitor progress, and ensure your team is on
                    track to achieve their goals. With this comprehensive tool,
                    you can:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Improve visibility and accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Identify and address roadblocks quickly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Celebrate milestones and successes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      <span>Make data-driven decisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Download the Program Completion Tracking Sheet
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with this powerful tool to streamline your program
                  management and ensure your team{`'`}s success.
                </p>
              </div>
              <div>
                <Link
                  target="_blank"
                  href={downloadURL}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Download Now
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-muted border-t py-6 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Tracking Sheet. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
