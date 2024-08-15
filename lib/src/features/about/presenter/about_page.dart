import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/src/global/presenters/components/app_bar.dart';
import 'package:portfolio/src/utils/launch_url.dart';

class AboutPage extends StatefulWidget {
  const AboutPage({super.key});

  @override
  State<AboutPage> createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: globalAppBar(context),
      body: SafeArea(
        child: Card(
          color: Colors.grey[100],
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: RichText(
                textAlign: TextAlign.justify,
                text: TextSpan(
                  text:
                      'Como pode observar, nesse aplicativo de portfolio não foram usadas rotas nomeadas. ',
                  children: [
                    const TextSpan(
                      text:
                          'Na documentação do Flutter, as rotas nomeadas são uma prática não recomendada. ',
                    ),
                    const TextSpan(
                      text: 'Para saber mais, acesse ',
                    ),
                    TextSpan(
                      text: 'Flutter Routes',
                      style: const TextStyle(color: Colors.blue),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () => openLink(
                              'https://docs.flutter.dev/ui/navigation#using-named-routes',
                            ),
                    ),
                    const TextSpan(text: '. '),
                  ],
                )),
          ),
        ),
      ),
    );
  }
}
