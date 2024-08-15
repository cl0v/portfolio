import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:gif/gif.dart';
import 'package:portfolio/home/presenters/blocs/pet_cat_bloc.dart';

class PetCatWidget extends StatelessWidget {
  const PetCatWidget({super.key, this.size = 10, this.color});
  final double size;
  final Color? color;

  @override
  Widget build(BuildContext context) {
    return BlocProvider<PetCatBloc>(
      create: (context) => PetCatBloc(),
      child: Builder(builder: (context) {
        return MouseRegion(
          onEnter: (_) => context.read<PetCatBloc>().add(PetCatHoverEvent()),
          onExit: (_) => context.read<PetCatBloc>().add(PetCatBlocIdleEvent()),
          child: BlocBuilder<PetCatBloc, String>(
            builder: (_, state) => ClipOval(
              child: Gif(
                colorBlendMode: BlendMode.modulate,
                color: color,
                height: MediaQuery.of(context).size.height * (size / 100),
                // width: MediaQuery.of(context).size.width * (size / 100),
                image: AssetImage(state),
                autostart: Autostart.loop,
              ),
            ),
          ),
        );
      }),
    );
  }
}
