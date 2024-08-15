import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:just_audio/just_audio.dart';

sealed class PetCatBlocEvent {}

class PetCatHoverEvent extends PetCatBlocEvent {}

class PetCatBlocIdleEvent extends PetCatBlocEvent {}

class PetCatBloc extends Bloc<PetCatBlocEvent, String> {
  static const _events = [
    "assets/gifs/cat/idle.gif",
    "assets/gifs/cat/hover.gif",
  ];

  // final player = AudioPlayer();
  // final audioSource = AssetSource('assets/gifs/cat/audio.mp3');

  PetCatBloc() : super(_events[0]) {
    on<PetCatHoverEvent>((event, emit) async {
      // await player.setAsset('assets/gifs/cat/audio.mp3');
      // player.play();
      emit(_events[1]);
    });
    on<PetCatBlocIdleEvent>((event, emit) async {
      // player.stop();
      emit(_events[0]);
    });
  }
}
