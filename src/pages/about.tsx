export default function About() {

    const expertises = [
        "Flutter / Dart",
        "Next and React",
        "Godot and GDScript ",
        "Unity3d / C#",
        "Docker plus Kubernetes",
        "NuxtJS and Vue3",
        "FastAPI and Django",
        "Other languages and technologies include: Python, Javascript, Dart, Typescript, Java, C, C#, Lua, GDScript, PHP, Go, SQL",
    ];
    const historyEvents = [
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
        <>
            <h2>About</h2>
            <p>Marcelo Viana, born in the late nineties in Brazil.</p>
            <h4>Expertise</h4>
            <ul>
                {expertises.map((ex) => (<li key={ex}>{ex}</li>))}
            </ul>
            <h4>Education / History</h4>
            <ul>
                {historyEvents.map((ev) => (<li key={ev}>{ev}</li>))}
            </ul>
        </>
    );
}