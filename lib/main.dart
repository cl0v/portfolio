import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hovering/hovering.dart';
import 'package:portfolio/home/presenters/blocs/pet_cat_bloc.dart';
import 'package:portfolio/src/global/presenters/blocs/theme_bloc.dart';

import 'home/presenters/components/pet_cat.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<ThemeBloc>(create: (context) => ThemeBloc()),
      ],
      child: BlocBuilder<ThemeBloc, bool>(builder: (context, state) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Portfolio',
          themeMode: state ? ThemeMode.dark : ThemeMode.light,
          darkTheme: ThemeData(
            colorScheme: ColorScheme.fromSeed(
              brightness: Brightness.dark,
              seedColor: Colors.deepPurple,
            ),
            useMaterial3: true,
          ),
          theme: ThemeData(
            colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
            useMaterial3: true,
          ),
          home: const MyHomePage(title: 'Meu Portfolio'),
        );
      }),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
        centerTitle: false,
        actions: [
          TextButton(
            onPressed: null,
            child: Text('Sobre'),
          ),
          TextButton(
            onPressed: null,
            child: Text('Projetos'),
          ),
          TextButton(
            onPressed: null,
            child: Text('Contatos'),
          ),
          TextButton(
            onPressed: null,
            child: Text('Curriculo'),
          ),
          BlocBuilder<ThemeBloc, bool>(
            builder: (context, state) {
              return IconButton(
                onPressed: () => context.read<ThemeBloc>().add(null),
                icon: state
                    ? const Icon(Icons.dark_mode)
                    : const Icon(Icons.light_mode),
              );
            },
          )
        ],
      ),
      body: Center(
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              height: MediaQuery.of(context).size.height * 0.3,
              width: MediaQuery.of(context).size.width * 0.3,
              child: Stack(
                children: [
                  Align(
                    alignment: Alignment.center,
                    child: PetCatWidget(
                      size: 20,
                      color: Colors.grey,
                    ),
                  ),
                  Align(
                    alignment: Alignment.bottomCenter,
                    child: PetCatWidget(
                      size: 12,
                      color: Colors.yellow,

                    ),
                  ),
                  Align(
                    alignment: Alignment(-0.9, 0.6),
                    child: PetCatWidget(
                      size: 8,
                      color: Colors.red,

                    ),
                  ),
                  Align(
                    alignment: Alignment(0.9, 0.6),
                    child: PetCatWidget(
                      size: 8,
                      color: Colors.blue,
                    ),
                  ),
                ],
              ),
            ),
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
