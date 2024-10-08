import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoonIcon, SunIcon } from 'lucide-react'
import { ChevronDownIcon, ChevronUpIcon, MenuIcon } from 'lucide-react'
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ContactForm from './components/contact-form'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marcelo Viana - Flutter Developer',
  description: 'Portfolio of Marcelo Viana, an experienced Flutter developer specializing in cross-platform mobile app development. Check out his projects and skills.',
  keywords: 'Flutter, mobile development, cross-platform, iOS, Android, portfolio, Nextjs, Python, Javascript, ML',
}

export default function Home() {


  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Marcelo Viana</h1>
          <nav>
            <ul className="hidden md:flex space-x-4">
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary">Skills</a></li>
              <li><a href="#social" className="hover:text-primary">Social</a></li>
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>

              {/* <li><a href="https://github.com/cl0v" className="hover:text-primary">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/marcelo-fernandes-viana-a49311329/" className="hover:text-primary">LinkedIn</a></li> */}
            </ul>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <a href="/about">About</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#projects">Projects</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#skills">Skills</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#social">Social</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#contact">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          {/* <Button variant="outline" size="icon" className="ml-4">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button> */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/static/images/avatar.png?height=300&width=300"
              alt="Marcelo Viana"
              width={300}
              height={300}
              className="rounded-full"
            />
            <p className="text-lg">
              Hi, I'm Marcelo Viana, a professional Flutter developer with 6 years of experience in creating
              beautiful and performant cross-platform mobile applications. I specialize in building
              user-friendly interfaces and implementing complex business logic.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                    alt={`Project ${project}`}
                    width={400}
                    height={200}
                    className="rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Button>View Project</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Flutter', 'Dart', 'Firebase', 'AWS', 'REST API', 'Git', 'UI/UX Design', 'State Management', 'Test-Driven Development'].map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </section>
        <section id="social" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Social</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="icon">
              <Link href={"https://linkedin.com/in/marcelo-fernandes-viana-a49311329/"}>
                <SiLinkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href={"https://github.com/cl0v"}>
                <SiGithub className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href={"https://instagram.com/celov23/"}>
                <SiInstagram className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>Fill out the form below to send me a message.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Marcelo Viana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}