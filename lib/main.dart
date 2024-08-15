import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:portfolio/src/features/about/presenter/about_page.dart';
import 'package:portfolio/src/global/assets/constants/icons.dart';
import 'package:portfolio/src/global/presenters/blocs/theme_bloc.dart';
import 'package:portfolio/src/utils/launch_url.dart';
import 'home/presenters/components/pet_cat.dart';
import 'src/global/presenters/components/app_bar.dart';

void main() {
  setUrlStrategy(PathUrlStrategy());
  runApp(MyApp());
}

void setPathUrlStrategy() {}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

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
              seedColor: Colors.green,
            ),
            useMaterial3: true,
          ),
          theme: ThemeData(
            colorScheme: ColorScheme.fromSeed(seedColor: Colors.green),
            useMaterial3: true,
          ),
          home: const HomePage(
            title: "Portfolio",
          ),
        );
      }),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.title});

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: globalAppBar(context),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.3,
              width: MediaQuery.of(context).size.width * 0.3,
              child: const Stack(
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
          ],
        ),
      ),
    );
  }
}
