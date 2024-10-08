'use server'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function ProjectsSection() {

    const projects = [
        {
            title: 'DreamPuppy Ltda. (iPets)',
            description: 'DreamPuppy is a Flutter and NuxtJS app that allows you to find dogs for sale/adoption. It was developed in 2023.',
            link: 'https://github.com/cl0v/DreamPuppy-Ltda',
            image: '/static/images/dreampuppy.jpeg',
            gif: false,
        },
        {
            title: 'TV Controller',
            description: 'Flutter app that allows you to control your TV by websocket and NodeJS Robots. It was developed in 2024.',
            link: 'https://github.com/cl0v/tv-controller',
            image: '/static/images/tvcontroller.gif',
            gif: true,
        },
        {
            title: 'Gaules - A Tribo',
            description: 'Gaules is a fan made App to the Streamer Gaules. It was developed in 2021, and it has been downloaded 18k times.',
            link: 'https://github.com/cl0v/gaules',
            image: '/static/images/gaules.jpg',
            gif: false,
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <Card key={project.title}>
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            unoptimized={project.gif}
                            src={`${project.image}?height=200&width=400`}
                            alt={`Project ${project.title}`}
                            width={400}
                            height={200}
                            className="rounded-md"
                        />
                    </CardContent>
                    <CardFooter>
                        <Button><Link href={project.link}>View Project</Link></Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )

}