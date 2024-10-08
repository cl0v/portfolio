'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
    const [showAllExpertise, setShowAllExpertise] = useState(false)
    const [showAllHistory, setShowAllHistory] = useState(false)

    const expertises = [
        "Flutter / Dart",
        "NextJS and React",
        "Godot and GDScript ",
        "Unity3d / C#",
        "Docker plus Kubernetes",
        "NuxtJS and Vue3",
        "FastAPI and Django",
        "Other languages and technologies include: Python, Javascript, Dart, Typescript, Java, C, C#, Lua, GDScript, PHP, Go, SQL",
    ];
    const historyEvents = [
        "2024 started to learn Machine Learning",
        "2024 started to learn NextJS",
        "2023 started DreamPuppy Ltda.",
        "2021-2023 helped develop various apps in Flutter as a freelancer.",
        "2021-2023 helped Pazze team as a Flutter Developer.",
        "2021 helped the EuQuero Delivery team as a Flutter Developer.",
        "2021 created a viral Flutter app called Gaules - A Tribo with more than 18k downloads.",
        "2020 deep-dived into Flutter.",
        "2019-2020 helped undergraduate civil engineers to accomplish a project.",
        "2019 quit university to start his own business.",
        "2019 created a viral game called Launchpad, reaching 24k downloads on Google Play.",
        "2018 helped an electrical engineer to accomplish projects in MATLAB.",
        "2018 made a virtual store called LaRose to try the dropshipping model.",
        "2018 started studying Computer Engineering at UNINTER University.",
        "2018 started learning Flutter on his own.",
        "2017 made a leaf recognition project with AI in Java for the university.",
        "2017 started learning hypnosis self-taught.",
        "2016 joined nTopus R&D team.",
        "2016 started studying Computer Engineering at Wyden University.",
        "2015 self-taught Godot with GDScript.",
        "2009-2015 practiced with various projects made in Unity.",
        "2009 started learning programming with Unity3D and JavaScript self-taught.",
    ];
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="sticky top-0 z-10 bg-background border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <Link href="/">
                            Marcelo Viana
                        </Link>
                    </h1>
                </div>
            </header>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">About</h1>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Background</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">Marcelo Viana, born in the late nineties in Brazil, is a versatile software developer.</p>
                    </CardContent>
                </Card>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Expertise</CardTitle>
                            <CardDescription>Technologies and skills</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[300px] pr-4">
                                <ul className="space-y-2">
                                    {expertises.slice(0, showAllExpertise ? undefined : 5).map((ex, index) => (
                                        <li key={index}>
                                            <Badge variant="secondary" className="mr-2">{index + 1}</Badge>
                                            {ex}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                            {expertises.length > 5 && (
                                <Button
                                    variant="ghost"
                                    className="w-full mt-4"
                                    onClick={() => setShowAllExpertise(!showAllExpertise)}
                                >
                                    {showAllExpertise ? (
                                        <>Show Less <ChevronUpIcon className="ml-2 h-4 w-4" /></>
                                    ) : (
                                        <>Show More <ChevronDownIcon className="ml-2 h-4 w-4" /></>
                                    )}
                                </Button>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Education / History</CardTitle>
                            <CardDescription>Professional and educational milestones</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[300px] pr-4">
                                <ul className="space-y-2">
                                    {historyEvents.slice(0, showAllHistory ? undefined : 5).map((ev, index) => (
                                        <li key={index} className="flex items-start">
                                            <Badge variant="outline" className="mr-2 mt-1">{historyEvents.length - index}</Badge>
                                            <span>{ev}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                            {historyEvents.length > 5 && (
                                <Button
                                    variant="ghost"
                                    className="w-full mt-4"
                                    onClick={() => setShowAllHistory(!showAllHistory)}
                                >
                                    {showAllHistory ? (
                                        <>Show Less <ChevronUpIcon className="ml-2 h-4 w-4" /></>
                                    ) : (
                                        <>Show More <ChevronDownIcon className="ml-2 h-4 w-4" /></>
                                    )}
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
    /*
        return (
            <>
                <h2>About</h2>
                <p>Marcelo Viana, born in the late nineties in Brazil.</p>
                <div>
                    <h4>Expertise</h4>
                    <ol>
                        {expertises.map((ex) => (<li key={ex}>{ex}</li>))}
                    </ol>
                </div>
                <div>
                    <h4>Education / History</h4>
                    <ul>
                        {historyEvents.map((ev) => (<li key={ev}>{ev}</li>))}
                    </ul>
                </div>
            </>
        );
        */
}