import 'package:flutter_bloc/flutter_bloc.dart';

sealed class PetCatBlocEvent {}

class PetCatHoverEvent extends PetCatBlocEvent {}

class PetCatBlocIdleEvent extends PetCatBlocEvent {}

class PetCatBloc extends Bloc<PetCatBlocEvent, String> {
  static const _events = [
    "assets/gifs/cat/idle.gif",
    "assets/gifs/cat/hover.gif",
  ];
  PetCatBloc(): super(_events[0]){
    on<PetCatHoverEvent>((event, emit) => emit(_events[1]));
    on<PetCatBlocIdleEvent>((event, emit) => emit(_events[0]));
  }
}
