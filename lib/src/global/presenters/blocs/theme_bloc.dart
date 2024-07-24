import 'package:flutter_bloc/flutter_bloc.dart';

class ThemeBloc extends Bloc<void, bool> {
  bool isDarkMode = false;
  ThemeBloc() : super(false){
    on((event, emit) {
      isDarkMode = !isDarkMode;
      emit(isDarkMode);
    },);
  }
}
