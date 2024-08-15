import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:portfolio/home/presenters/components/pet_cat.dart';
import 'package:portfolio/src/features/about/presenter/about_page.dart';
import 'package:portfolio/src/global/assets/constants/icons.dart';
import 'package:portfolio/src/global/presenters/blocs/theme_bloc.dart';
import 'package:portfolio/src/utils/launch_url.dart';

AppBar globalAppBar(BuildContext context) => AppBar(
      backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      title: const Text('Portfolio'),
      leading: const PetCatWidget(),
      centerTitle: false,
      actions: [
        TextButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (_) => const AboutPage(),
              ),
            );
          },
          child: Text('Sobre'),
        ),
        TextButton(
          onPressed: () {},
          child: Text('Projetos'),
        ),
        TextButton(
          onPressed: () {},
          child: Text('Contatos'),
        ),
        TextButton(
          onPressed: () {},
          child: Text('Curriculo'),
        ),
        BlocBuilder<ThemeBloc, bool>(
          builder: (context, state) {
            return IconButton(
              onPressed: () => context.read<ThemeBloc>().add(null),
              icon: !state
                  ? const Icon(Icons.dark_mode)
                  : const Icon(Icons.light_mode),
            );
          },
        ),
        BlocBuilder<ThemeBloc, bool>(
          builder: (context, state) => IconButton(
            onPressed: () {
              openLink("https://github.com/cl0v/portfolio");
            },
            icon: Image.asset(
              githubIconPath,
              width: 24,
              height: 24,
              color: state ? Colors.white : null,
            ),
          ),
        ),
      ],
    );
